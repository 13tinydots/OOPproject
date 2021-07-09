const Manager = require('../lib/classes');

describe('Initialization', () =>{
    it('should create a new instance of a Manager', () => {
        const manager = new Manager(bobby, "12345", "nomail@nomail.com");
        expect(manager).toBeInstanceOf(Manager);
    })
})