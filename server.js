"use strict";
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 全てのリクエスト
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//検査
//app.use(express.static(__dirname + '/public'));
//

app.post("/", (req, res) => {let message = req.body.message;
    console.log(message);
    let datetime = new Date();
    let result = {
        'message' : message,
        'datetime': datetime
    };
    res.send(result);
});
app.listen(3000);
