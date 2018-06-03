"use strict";

const homeController = require('../controllers/home');


module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/',
            handler: homeController.renderPage
        }
    ];
}();
