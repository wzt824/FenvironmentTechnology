const http = require("http");
const url = require("url");
const path=require("path");
const router=require("./router");
//创建服务器
let severe = http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        let urlObj = url.parse(req.url);  //http://localhost:8080/index.html
        let urlStr=urlObj.pathname.substring(1); //去掉“/”
        // console.log(urlStr);//index.html
        let extname=path.extname(urlStr).substring(1);//去掉"."
        // console.log(extname);//html
        try{
            router[extname](req,res,urlStr);
        }catch(e){
            router["error"](req,res);
        }
    }
})
//监听
severe.listen(706,"localhost",()=>{
    console.log("waiting...");
})