'use strict';

const express = require('express');
var status = require('http-status');
var users = require('./users');
// Constants

// App
const app = express();
app.get('/', function(req, res) {
    res.status(200);
    res.send('Hello world\n');
});

app.get('/user/:user', function(req, res) {
    if (users.list.indexOf(req.params.user) === -1) {
        return res.status(status.NOT_FOUND).
        json({ error: 'Not Found' });
    }
    res.json({ user: req.params.user });
});
var ip = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 3000;
var server = app.listen(port, ip);
console.log('Running on https://' + process.env.IP + ':' + process.env.PORT);
module.exports = server