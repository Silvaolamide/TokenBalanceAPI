require('dotenv').config();
const koa = require('koa');
const app = new koa();
const router = require('./api/router.js');
app
    .use(router.routes())
    // .use(router.allowedMethods());
    //When live
app.listen(process.env.PORT || 80);
    //When on Localhost
//app.listen(3000);


