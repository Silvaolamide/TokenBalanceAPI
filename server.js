require('dotenv').config();
const koa = require('koa');
const app = new koa();
const router = require('./api/router.js');
app
    .use(router.routes())
    // .use(router.allowedMethods());
app.listen(process.env.PORT || 80);
