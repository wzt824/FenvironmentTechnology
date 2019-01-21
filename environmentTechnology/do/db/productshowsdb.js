/*此文件是针对集合goodslists的所有数据库操作*/
const mongoose = require('mongoose');
const dbconfig = require('./dbconfig');

//定义模板(定义一个JavaScript对象)
let goodsListsSchema = new mongoose.Schema({
	'goodsType':String,
	'goodsName':String,
	'goodsImg':String,
	'goodsBg':String
});

//定义模型（把模板对象和集合连接起来）
let goodslistsModel = mongoose.model("productshows",goodsListsSchema); //productshows为集合名



module.exports = {
	//增



	//删


	//改
	

	//查(只查询，不响应)
	getProductShow:function(condation,func) {
		//处理(连接数据库)
		mongoose.connect(dbconfig.connstr,{ useNewUrlParser: true }).then(
			function(){				
				//增删改查，就是使用模型对象来操作
					//查询			
				goodslistsModel.find(condation,(err,data)=>{
					mongoose.disconnect();
					if(err){
						func([]);
					}else{
						func(data);
					}
				});		
			}
		);
	}
	
}