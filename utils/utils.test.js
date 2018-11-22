const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#Add', () => {
        it('Should add two numbers ', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44);
            // if (res !== 44){
            //     throw new Error(`Value not correct expected 44 but it is:-  ${res}`);
            // }
        });
    });
    
    describe('#Squre', () => {
        it('Should squre two numbers ', () => {
            var res = utils.squre(3);
            if(res !== 9){
                throw new Error('Value not correct expected 9 but it is:-  ${res}`')
            }
        } );
    });
    
    describe('#Some Test', () => {
        it('Should be some more test ', () => {
            expect(12).toBe(12);
            expect({name: 'Rahul'}).toEqual({name: 'Rahul'});
            //expect([1,2,3]).toInclude(1);                             It is in the documentation of old expect but it not working here
        
        });
    });
    
   
    describe('#Some Test on object', () => {
        it( ' Should set  User first name ans second name ', () =>{
            user = {Location: 'Ara',
                    Age: 24
                    };
            var res = utils.setName(user, 'Rahul Pandey');
            expect(res).toEqual({
                Location: 'Ara',
                Age: 24,
                firstName: 'Rahul',
                lastName: 'Pandey'
            });
        });
    });

    describe('#Async Add', () => {
        it('Should be Async Add Working ', (done) => {               // Whenever aync method id called we have to write 'done'  methohd in our test
            utils.asyncAdd(12, 23, (sum) => {
                expect(sum).toBe(35);
                done();
            })
        });
    });
});


