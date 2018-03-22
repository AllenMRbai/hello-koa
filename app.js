//node模块
const fs = require('fs');
//地方模块
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
//自己的模块
const routes = require('./middlewares/controller.js');
const templating = require('./utils/templating.js');

const isProduction=process.env.NODE_ENV==='production';//获得当前设备是否是生产环境
console.log('当前环境',process.env.NODE_ENV)

const app = new Koa();

templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}, app);

app.use(bodyParser());

//静态文件管理(因为项目上线时的静态文件是部署在反向代理服务器内，如Ngix，所以需要判断当前运行环境)
if(!isProduction){
	const staticFiles=require('./middlewares/static-files');//静态文件管理
	app.use(staticFiles('/public/',__dirname+'/public'));
}

//添加路由
app.use(routes);

app.listen(3000, function () {
    console.log("app started at port 3000...")
});