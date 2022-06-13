require('dotenv').config();
const koa = require('koa');
const app = new koa();
const router = require('./router.js');
app
    .use(router.routes())
    // .use(router.allowedMethods());
app.listen(3000);