var assert = require('assert');

var rmount = require('./index');

var defs = [];

var log = function (method) {
  return function (path, handlers) {
    console.log(
      ('     ' + method).slice(-5),
      (path + '            ').slice(0, 12),
      handlers.map(function (h) { return h.name; })
    );
    defs.push([ method, path, handlers ]);
  };
};

var http = {
  get:  log('get'),
  post: log('post'),
  put:  log('put'),
  del:  log('del')
};

var get  = function  get(req, res, next) {};
var post = function post(req, res, next) {};
var put  = function  put(req, res, next) {};
var del  = function  del(req, res, next) {};

var routes = [
  {
    method: 'get',
    path: [ 'a' ],
    handlers: [ get ]
  },
  {
    method: 'post',
    path: [ 'a', 'b' ],
    handlers: [ post ]
  },
  {
    method: 'put',
    path: [ 'a', 'b', 'c' ],
    handlers: [ put ]
  },
  {
    method: 'del',
    path: [ 'a', 'b', 'c', 'd' ],
    handlers: [ del ]
  }
];

rmount.mount(routes, http, '/0');

assert.deepEqual(defs, [
  [ 'get', '/0/a', [ get ] ],
  [ 'post', '/0/a/b', [ post ] ],
  [ 'put', '/0/a/b/c', [ put ] ],
  [ 'del', '/0/a/b/c/d', [ del ] ]
]);

