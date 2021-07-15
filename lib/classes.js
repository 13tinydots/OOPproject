
class Employee {
    constructor(employeeName, employeeID, emailAddress, role) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.emailAddress = emailAddress;   
        this.role = role;
    }
    getEmail() {
        return this.emailAddress
    }
    getID() {
        return this.employeeID
    }
    getRole() {
        return this.role
    }
}

class Manager extends Employee {
    constructor(employeeName, employeeID, emailAddress, role, officeNumber){
    super(employeeName, employeeID, emailAddress, role)
    this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber
    }
}

class Engineer extends Employee {
    constructor(employeeName, employeeID, emailAddress, role, github){
    super(employeeName, employeeID, emailAddress, role)
    this.github = github;
    }
    getGithub() {
        return this.github
    }
}

class Intern extends Employee {
    constructor(employeeName, employeeID, emailAddress, role, school){
    super(employeeName, employeeID, emailAddress, role)
    this.school = school;
    }
    getSchool() {
        return this.school
    }
}

module.exports = {
    Employee: Employee,
    Manager: Manager, 
    Intern: Intern, 
    Engineer: Engineer
}