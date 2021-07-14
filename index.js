const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require('constants');
const fs = require('fs');
const inquirer = require("inquirer");
const { inherits } = require('util');
const {Employee} = require('./lib/classes');
const {Manager}= require('./lib/classes');
const {Engineer} = require('./lib/classes');
const {Intern} = require('./lib/classes');
const generateHtml = require('./src/template');

const arrOfEmployees = [];

const questions = ([
    {
        type:'list',
        name: 'role',
        message:"What kind of employee is this?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type:'input',
        message:"Name",
        name: 'employeeName'
    },
    {
        type:'input',
        message:"ID",
        name: 'employeeID'
    },
    {
        type:'input',
        message:"email",
        name: 'emailAddress'
    }
])

function askManagerQuestions({employeeName, employeeID, emailAddress, role}) {
    inquirer.prompt([
        {
            message: "Office number?",
            name: "officeNum",
            type: "input"
        }
    ]).then(({officeNum}) => {
        const manager = new Manager(employeeName, employeeID, emailAddress, role, officeNum)
        arrOfEmployees.push(manager)
        addAnotherEmployee();
    })
}

function askEngineerQuestions({employeeName, employeeID, emailAddress, role}) {
    inquirer.prompt([
        {
            message: "Github?",
            name: "github",
            type: "input"
        }
    ]).then(({github}) => {
        const engineer = new Engineer(employeeName, employeeID, emailAddress, role, github)
        arrOfEmployees.push(engineer)
        addAnotherEmployee();
    })
}

function askInternQuestions({employeeName, employeeID, emailAddress, role}) {
    inquirer.prompt([
        {
            message: "School?",
            name: "school",
            type: "input"
        }
    ]).then(({school}) => {
        const intern = new Intern(employeeName, employeeID, emailAddress, role, school)
        arrOfEmployees.push(intern)
        addAnotherEmployee();
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err=> {
        if(err) throw err
    } )
}

function addAnotherEmployee(){
    inquirer.prompt([
        {
            message: "Add another employee?",
            name: "add",
            type: "list",
            choices: ["yes", "no"]
        }
    ]).then((response) => {
        // called object value by using dot notation
        if (response.add === "yes") {
            init();
        } else {
        var rosterPage = generateHtml(arrOfEmployees);
        };
        writeToFile("team.html", rosterPage)
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        if(answers.role === "Manager"){
            askManagerQuestions(answers)
        } else if (answers.role === "Engineer"){
            askEngineerQuestions(answers)
        } else {
            askInternQuestions(answers)
        }
    })
}

init()
