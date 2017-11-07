const express = require("express");
const mongoskin = require("mongoskin");
const app = express();

// app.use(express.bodyParser());

//连接数据库
const db = mongoskin.db("mongodb://slimhong:a1234560@cluster0-shard-00-00-xge42.mongodb.net:27017/slimhong?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin", { safe: true });

//设置跨域访问
app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Request-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1");
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

