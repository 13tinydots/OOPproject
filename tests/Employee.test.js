const Employee = require('../lib/classes');

describe('Initialization', () =>{
    it('should create a new instance of an Employee', () => {
        const employee = new Employee(bobby, "12345", "nomail@nomail.com");
        expect(employee).toBeInstanceOf(Employee);
    })
})