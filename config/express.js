var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require("express-load")
module.exports = () =>{
var app = express();

app.set('views','./app/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./app/public'));


load('routes',{cwd:'app'})
    .then('infra')
    .into(app)

return app
}