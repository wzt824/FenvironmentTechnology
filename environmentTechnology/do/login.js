const url = require("url");
const mongoose = require("mongoose");
const usersdb = require("./usersdb");
//暴露接口
module.exports = function (req, res) {
    //1.接收参数
    let urlObj = url.parse(req.url, true);
    //2.处理（mongodb）

    mongoose.connect('mongodb://localhost:27017/login',{useNewUrlParser:true}).then(       
        function () {
            //3.增删改查（使用模型对象来操作）
            console.log(urlObj.query.userName);
            console.log(urlObj.query.userPass)
            usersdb.userModel.find({
                "userName": urlObj.query.userName,
                "userPass": urlObj.query.userPass
            }, (err, data) => {
                mongoose.disconnect();//断开数据库
                if (err) {
                    res.statusCode = 500;
                    res.setHeader("Content-type", "text/html;charset=utf-8");
                    res.write("服务器出错了!");
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "text/html;charset=utf-8");
                    if (data.length > 0) {
                        res.write("登录成功！");
                    } else {
                        res.write("登录失败,用户名不存在！");
                    }
                    res.end();
                }
            })
        }
    );
}
