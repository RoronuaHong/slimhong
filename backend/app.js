const express = require("express");
const mongoskin = require("mongoskin");
const app = express();

app.use(express.compress());
app.use(express.static(__dirname + "/html"));
app.use(express.methodOverride());
app.use(express.bodyParser());

//连接数据库
const db = mongoskin.db("mongodb://slimhong:a1234560@cluster0-shard-00-00-xge42.mongodb.net:27017/slimhong?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", { safe: true });

//设置跨域访问
app.all("*", (req, res, next) => {
    //Origin参数的值指定了允许访问该资源的外域URI
    res.header("Access-Control-Allow-Origin", "*");

    //表明服务器允许请求中携带字段 X-PINGOTHER 与 Content-Type
    res.header("Access-Control-Allow-Headers", "X-Request-With");

    //表明服务器允许客户端使用 POST, GET 和 OPTIONS 方法发起请求
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    //表明用于支持当前网页应用程序的技术
    res.header("X-Powered-By", "3.2.1");

    //指定内容类型(json / 字符集)
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

//接口配置
app.param("collectionName", (req, res, next, collectionName) => {
    req.collection = db.collection(collectionName);

    return next();
});

app.get("/", (req, res) => {
    res.send("My API");
});

app.get("/collections/:collectionName", (req, res) => {
    req.collection.find(
        {},
        {
            limit:10,
            sort: [['_id',-1]]
        })
    .toArray((e, results) => {
        if(e) {
            return next(e);
        }
        res.send(results);
    });
});

//启动服务
const server = app.listen(7713, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example are listening at http://192.168.0.107", host);
});

module.export = app;

