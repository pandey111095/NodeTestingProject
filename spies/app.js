const db = require('./db');


module.exports.handelSignup = (email, password) => {
    db.saveUser({
        email: 'Ram@gmal.com',
        password: 'abc123'
    });
};
