const url = require('url');
const productshowsdb = require('./db/productshowsdb');

module.exports=function(req,res){
	//1、接收参数
	let urlObj = url.parse(req.url,true);
	
	//2、处理
	productshowsdb.getProductShow({'goodsType':urlObj.query.goodsType},function(data){
		//3、响应
		res.statusCode = 200;
        res.setHeader('Content-type','text/html;charset=utf-8');
        //此处不需要if-else也行，若有错返回的是data为空
		res.write(JSON.stringify(data));
		res.end();
	});
}