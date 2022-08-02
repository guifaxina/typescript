"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
function getUserName() {
    return "Guilherme Faxina";
}
app.get('/', userController());
app.listen(3000, function () { return console.log("Server is listening"); });
