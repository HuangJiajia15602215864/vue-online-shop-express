// 导入模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 导入mongoose
const mongoose = require('mongoose');

// 导入路由中间件
var index = require('./routes/index');
var users = require('./routes/users');
const api = require('./routes/api');

// 初始化express实例
var app = express();

// view engine setup
// 设置了模板引擎为 ejs，以及模板引擎的存放目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 连接数据库
mongoose.connect(`mongodb://localhost:27017/test`,{useNewUrlParser: true,useUnifiedTopology: true});

// 开启资源跨域访问 CORS
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// 中间件的加载使用
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由中间件
app.use('/', index);
app.use('/users', users);
app.use('/api/v1', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 导出 express 实例，丢给 bin/www 脚本进行调用并启动服务器
module.exports = app;
