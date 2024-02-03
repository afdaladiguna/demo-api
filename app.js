const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/profile', (req, res) => {
    res.send({
        name: 'afdal',
        email: 'afdal@gmail.com',
        address: 'gowa',
        phone_number: '085555555'
    });
})

app.get('/cat', (req, res) => {
    res.send('meow');
})

app.listen(8080, (req, res) => {
    console.log('server run on 8080');
})