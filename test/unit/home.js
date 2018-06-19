"use strict";

const request = require('supertest');
require('../../index');
require('should');
const server = request.agent("http://localhost:3000");

console.log(` 
=======================================

            Unit testing

=======================================
`);

describe('Chenck Not found route', function () {
    describe('GET /', function () {
        it('should return statusCode 404', function (done) {
            server
                .get('/test')
                .expect('Content-type', 'application/json; charset=utf-8')
                .expect(404)
                .end(function (err, res) {
                    res.status.should.equal(404);
                    done();
                });
        });
    });
});

describe('A set of functionalities', () => {
    it('a set of functionalities should do something nice', () => {
    });

    it('a subset of functionalities should do something great', () => {
    });

    it('a subset of functionalities should do something awesome', () => {
    });

    it('another subset of functionalities should also do something great', () => {
    });
});

