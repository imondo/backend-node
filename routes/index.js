const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const router = new Router({
  prefix: '/api'
});

register();

/**
 * 读取注册全路由
 */
function register(dir = 'modules') {
  const files = fs.readdirSync(path.join(__dirname, `./${dir}`));

  files.filter(file => ~file.search(/^[^\.].*\.js$/)).forEach(file => {
    /**
     * 获取文件名
     * 如 users.js ，截取 file.substr(0, file.length - 3); 因为 .js 长度为 3
     */
    const fileName = file.substr(0, file.length - 3);

    const fileEntity = require(path.join(__dirname, `./${dir}/${file}`));

    /**
     * 路由注册
     * 如：users.js
     * 注册路由 /api/users
     */
    router.use(`/${fileName}`, fileEntity.routes(), fileEntity.allowedMethods());
  });
}

module.exports = router;