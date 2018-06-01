import * as Koa from 'koa'
import * as Router from 'koa-router'
import User from './controller/user'
const  bodyParser = require('koa-bodyparser')
import getAudio from './controller/yt'

const app = new Koa();
const _r = new Router();

app.use(bodyParser())

// Logging MiddleWare
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });

/*_r.get('/get/:id', async (ctx) => {
    let user = await User.get(ctx.params.id);
    console.log(user);
})*/

_r.post('/youtube', async (ctx) => {
    console.log(ctx.request.body)
    const url = ctx.request.body['yt-link'];
    
    getAudio(url);

    ctx.response.status =200;
});


app.use(_r.routes());

if(!module.parent) app.listen(3000);

console.log("Server is in use");