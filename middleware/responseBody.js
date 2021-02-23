/**
 * 统一处理返回格式
 * @param {Object} options 
 */
module.exports = (options = {}) => {
  return async (ctx, next, error) => {
    try {
      await next();
      ctx.success = (data, type) => {
        ctx.type = type || options.type || 'json'
        ctx.body = {
          code: options.successCode || '000000',
          msg: options.successMsg || '操作成功',
          data
        }
      }
      ctx.fail = (msg, code) => {
        ctx.type = options.type || 'json'
        ctx.body = {
          code: options.failCode || code || '000001',
          msg: msg || options.failMsg || '操作失败'
        }
      }
    } catch (error) {
      throw error;
    }
  }
}