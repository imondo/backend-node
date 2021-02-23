/**
 * 日志打印
 * @param {*} ctx 
 */
function log(ctx) {
  console.log(`loggers: ${ctx.method, ctx.header.host + ctx.url}`);
}

module.exports = function () {
  return async function ( ctx, next ) {
    log(ctx);
    await next();
  }
}