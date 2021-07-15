const {Intern} = require('../lib/classes');

describe('Initialization', () =>{
    it('should create a new instance of an Employee', () => {
        const intern = new Intern("bobby", "12345", "nomail@nomail.com", "school");
        expect(intern).toBeInstanceOf(Intern);
    })
})