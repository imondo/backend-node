const logger = require('../middleware/logger');
const responseBody = require('../middleware/responseBody');

module.exports = function(app) {
  app.use(logger());
  app.use(responseBody());
}