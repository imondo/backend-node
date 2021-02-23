const Koa = require('koa');
const router = require('./routes/index');
const config = require('./config');

const initUse = require('./core/use');

const app = new Koa();

app.use(router.routes(), router.allowedMethods())

initUse(app);

app.listen(config.PORT, () => {
  console.log(`项目启动成功! http://localhost:${config.PORT}`)
});