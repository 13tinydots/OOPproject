
class Employee {
    constructor({employeeName, employeeID, emailAddress, role}) {
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
        returns this.role
    }
}

class Manager extends Employee {
    constructor({employeeName, employeeID, emailAddress, role,})
}