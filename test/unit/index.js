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

describe('Render Home', function () {
    describe('GET /', function () {
        it('should return statusCode 200', function (done) {
            server
                .get('/')
                .expect('Content-type', 'text/html; charset=utf-8')
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    done();
                });
        });
    });
});

