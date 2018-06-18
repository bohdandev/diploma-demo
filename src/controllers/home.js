"use strict";


function HomeController(){};
HomeController.prototype = (function(){

    return {
        renderPage: function (request, reply){
            return reply.view('index');
        }
    }
})();

const homeController = new HomeController();
module.exports = homeController;
