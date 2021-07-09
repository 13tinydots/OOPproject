const fs = require('fs');

const Employee = require('./lib/classes');
const Manager = require('./lib/classes');
const Engineer = require('./lib/classes');
const Intern = require('./lib/classes');

inquirer
.prompt([
    {
        type:'list',
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

.then((answers) =>{
    answers:
    
})
