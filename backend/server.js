let models = require('./app/index');
const server = require('./app/server/index');

server.listen(3001, function() {
  console.log('%s listening at %s', server.name, server.url);
});
server.on('restifyError', function(req, res, err, callback) {
    err.toJSON = function customToJSON() {
        return {
          data: {},
          error: {
            name: err.name,
            message: err.message
          }
        };
    };
    err.toString = function customToString() {
        return `${err.name} >> ${err.message}`;
    };
    return callback();
});