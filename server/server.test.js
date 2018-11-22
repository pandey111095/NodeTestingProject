const  request = require('supertest');
const expect = require('expect');


var app = require('./server').app;
describe('Server Test', () => {
    describe('#GET/', () => {
        it('Should Return Express working response', (done) => {
            request(app)
            .get('/')
            .expect(200)                                                // These two  are supertest's expect
            //.expect('Express working')                                  // These two  are supertest's expect
            .expect((res) => {
                expect(res.body).toEqual({
                    name: 'Rahul',
                    age: 23
                });
            })
            .end(done);
        });
    });

    describe('#GET/users', () => {
        it ('Should Rerurn from user route', (done) => {
            request(app)
            .get('/users')
            .expect(400)
            .expect((res) => {
                expect(res.body).toEqual({
                    name: 'Rahul',
                    age: 23
                });
            })
            .end(done);
        });
    });
});
