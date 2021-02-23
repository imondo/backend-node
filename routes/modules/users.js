const router = require('koa-router')()

// /api/users
router.get('/', async (ctx, next) => {
  await next();
  ctx.success({
    user: 'Mondo'
  })
})

// /api/users/:id
router.get('/:id', async (ctx, next) => {
  await next();

  // /api/users/1
  console.log(ctx.params) // { id: 1 }
  ctx.success({
    user: 'Mondo',
    id: ctx.params.id
  })
})

module.exports = router