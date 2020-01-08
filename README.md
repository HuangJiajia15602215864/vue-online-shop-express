# vue-online-shop-express
电商应用服务端，基于 Node.js 平台的 Express 框架实现后端 API 数据接口，并且将数据存储在 MongoDB 中，结合Postman实现API测试。

# 初始化项目
1、使用 express-generator 脚手架来初始化我们的 Express 项目

# 目录结构
bin
   ——www：用来开启服务器的脚本
controllers
   ——manufacturer.js: 制造商增删改查接口逻辑
   ——product.js: 产品增删改查接口逻辑
model
   ——index.js
node_modules:脚手架依赖
public：
routes
   ——index.js：路由主文件
   ——users.js：路由主文件
   ——api.js：路由主文件
views
   ——index.ejs：主页的模板文件
   ——error.ejs：主页的模板文件
   ——layout.ejs：主页的模板文件
app.js：Express 应用主文件
