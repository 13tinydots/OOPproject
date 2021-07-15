const {Engineer} = require('../lib/classes');

describe('Initialization', () =>{
    it('should create a new instance of an Employee', () => {
        const engineer = new Engineer("bobby", "12345", "nomail@nomail.com", "github");
        expect(engineer).toBeInstanceOf(Engineer);
    })
})