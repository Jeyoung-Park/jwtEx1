const Koa = require('koa');
const Router = require('koa-router');

const PORT = 4000;

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
