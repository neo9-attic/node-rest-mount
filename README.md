Rest Mount
==========

Install
-------

    npm install rest-mount

Usage
-----

    var rmount = require('rest-mount');

    var routes = [
      {
        method: 'post',
        path: [ 'accounts' ],
        handlers: [ function (req, res, next) { /*...*/ } ]
      },
      {
        method: 'get',
        path: [ 'accounts', ':id' ],
        handlers: [
          function (req, res, next) { /*...*/ },
          function (req, res, next) { /*...*/ }
        ]
      }
    ];

    rmount.mount(routes, http, '/service');

