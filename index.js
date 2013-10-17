module.exports.mount = function (routes, http, mpoint) {
  mpoint = mpoint || '';

  routes.forEach(function (route) {
    http[route.method](mpoint + '/' + route.path.join('/'), route.handlers);
  });
};

