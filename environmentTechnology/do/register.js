

/*
//一、get请求方式
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
            usersdb.userModel.find({
                "userName": urlObj.query.userName
            }, (err, data) => {
                if (err) {
                mongoose.disconnect();//断开数据库(注意此处的数据库断开写的地方，放在if上面会执行else后面的error)
                    res.statusCode = 500;
                    res.setHeader("Content-type", "text/html;charset=utf-8");
                    res.write("服务器出错了!");
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "text/html;charset=utf-8");
                    if (data.length > 0) {
                        res.write("用户名已存在！");
                        res.end();
                    } else {
                        //添加
                        let userEntity=new usersdb.userModel({
                            "userName":urlObj.query.userName,
                            "userPass":urlObj.query.userPass
                        });
                        // console.log(urlObj.query.userName)
                        // console.log(urlObj.query.userPass)
                        // console.log(userEntity);
                        userEntity.save((error,data)=>{
                            // console.log("error:"+data);
                            mongoose.disconnect();
                            if(error){
                                res.write("服务器出错啦！");
                            }else{
                                // console.log("data:"+data);
                                res.write("注册成功！");
                            }
                            res.end();
                        });
                    }
                }
            })
        }
    );
}
*/


//二、post请求方式
const url = require("url");
const mongoose = require("mongoose");
const usersdb = require("./usersdb");
const querystring=require("querystring");

module.exports=function(req,res){
    //1.接收参数
    let postStr=""; //定义一个字符串变量来接收客户端传来的数据
    req.on("data",function(datas){//客户端发来的数据不止一条
        postStr+=datas;
    });
    req.on("end",function(){
        let urlObj=querystring.parse(postStr);
        //2.处理(连接数据库)
        mongoose.connect("mongodb://localhost:27017/login",{useNewUrlParser:true}).then(
            function(){
                usersdb.userModel.find({
                    "userName": urlObj.userName
                }, (err, data) => {
                    if (err) {
                    mongoose.disconnect();//断开数据库(注意此处的数据库断开写的地方，放在if上面会执行else后面的error)
                        res.statusCode = 500;
                        res.setHeader("Content-type", "text/html;charset=utf-8");
                        res.write("服务器出错了!");
                        res.end();
                    } else {
                        res.statusCode = 200;
                        res.setHeader("Content-type", "text/html;charset=utf-8");
                        if (data.length > 0) {
                            res.write("用户名已存在！");
                            res.end();
                        } else {
                            //添加
                            let userEntity=new usersdb.userModel({
                                "userName":urlObj.userName,
                                "userPass":urlObj.userPass
                            });
                            userEntity.save((err,data)=>{
                                mongoose.disconnect();
                                if(err){
                                    res.write("服务器出错啦！");
                                }else{
                                    res.write("注册成功！");
                                }
                                res.end();
                            });
                        }
                    }
                })
            }
        ) 
    });
}

