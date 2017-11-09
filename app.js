"use strict"

const config = require('./config.secret')

const express = require('express')
const app = express()

const expressMongoDb = require('express-mongo-db');

app.use(expressMongoDb(config.mongo_url));

////////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res) {
    console.log(req.db);
    res.send('FirstLamba root /');
})

app.get('/helloworld', function(req, res) {
    res.send('FirstLambda /helloworld!');
})

app.get('/some/deep/path', function(req, res) {
    res.send('FirstLambda /some/deep/path');
})

////////////////////////////////////////////////////////////////////////////////

if (require.main === module) {
    app.listen(config.port, function() {
        console.log("Local server started");
    });
}

////////////////////////////////////////////////////////////////////////////////

module.exports = app;
