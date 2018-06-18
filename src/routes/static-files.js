"use strict";

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/vendor/{assetpath*}',
            handler: {
                directory: {
                    path: 'public/vendor',
                    listing: true
                }
            }
        },
        {
            method: 'GET',
            path: '/css/{assetpath*}',
            handler: {
                directory: {
                    path: 'public/css',
                    listing: true
                }
            }
        },
        {
            method: 'GET',
            path: '/js/{assetpath*}',
            handler: {
                directory: {
                    path: 'public/js',
                    listing: true
                }
            }
        },
        {
            method: 'GET',
            path: '/img/{assetpath*}',
            handler: {
                directory: {
                    path: 'public/img',
                    listing: true
                }
            }
        }
    ];
}();