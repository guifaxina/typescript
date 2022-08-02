"use strict";
exports.__esModule = true;
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.findAll = function (request, response) {
        response.send("Olá");
    };
    return userController;
}());
exports["default"] = new userController();
