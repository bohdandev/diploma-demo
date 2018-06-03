"use strict";


function HomeController(){};
HomeController.prototype = (function(){

    return {
        renderPage: function (request, reply){
            return reply.view('index', {
                title: 'examples/views/jade/index.js | Hapi ',
                message: 'Index - Hello World!'
            });
        }
    }
})();

const homeController = new HomeController();
module.exports = homeController;
