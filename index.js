'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');

const constants = require('./src/config/constants');

const routes = require('./src/routes');


const server = new Hapi.Server({port: constants.application.port});

const startServer = async () => {

    await server.register(Vision);

    await server.register(Inert);

    await server.views({
        engines: {
            pug: require('pug')
        },
        path: __dirname + '/templates',
        compileOptions: {
            pretty: true
        }
    });

    for (let route in routes) {
        server.route(routes[route]);
    }


    try {
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {}

};

startServer();

module.exports = server;