const express = require('express');
const app1 = require('./../spies/app');

app = express();
 
app.get('/', (req, res) => {
    res.send({
        name: 'Rahul',
        age: 23
    });
});


app.get('/users', (req, res) => {
    res.status(400).send({
        name: 'Rahul',
        age: 23
    });
})

app.listen(3000, () => {
    console.log('Server Started');
});

app1.handelSignup('as','sa');

module.exports.app = app;