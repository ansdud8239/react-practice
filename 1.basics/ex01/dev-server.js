var http = require('http');
var path = require('path');
var express = require('express');

var port = 9090;

//path D:\douzone2023\eclipse-workspace\react-practice\1.basics\ex01\public
//console.log('path',(path.join(__dirname, "public")));
var application = express().use(express.static(path.join(__dirname, "public")))
http
    .createServer(application)
    .on('listening', function(){
        console.log('http server running on ' + port);
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port); 