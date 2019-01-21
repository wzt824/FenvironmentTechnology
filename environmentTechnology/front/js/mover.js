/*
//正向运动。
//功能：运动：动态改变DOM的样式属性
//     让一个物体，按照指定时间，指定的方向从某个地方运动到某个地方。
//参数：
// DOM元素
// 样式属性：attr
// 初始的值
// 结束的值
// 步长
// 方向
// 时间间隔
//返回值：无

function moverObjZheng(domObj,attr,startValue,endValue,step,direction,timeSpace){
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(currValue>=endValue){
			currValue = endValue;
			clearInterval(myTimer);
		}
		
		//3、改变外观
		domObj.style[attr] = currValue+"px";
		
	},timeSpace);
	
}


//反向运动。
//功能：运动：动态改变DOM的样式属性
//     让一个物体，按照指定时间，指定的方向从某个地方运动到某个地方。
//参数：
// DOM元素
// 样式属性：attr
// 初始的值
// 结束的值
// 步长
// 方向
// 时间间隔
//返回值：无

function moverObjFan(domObj,attr,startValue,endValue,step,direction,timeSpace){
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(currValue<=endValue){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";
		
	},timeSpace);
}

function moverObj(domObj,attr,startValue,endValue,step,direction,timeSpace){
	if(direction>0){
		moverObjZheng(domObj,attr,startValue,endValue,step,direction,timeSpace)
	}else{
		moverObjFan(domObj,attr,startValue,endValue,step,direction,timeSpace)
	}
}
*/

function moverObj(domObj,attr,startValue,endValue,step,direction,timeSpace){
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";		
	},timeSpace);
}

function moverObj02(domObj,attr,endValue,step,direction,timeSpace){
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";		
	},timeSpace);
}

//功能：运动：动态改变DOM的样式属性
//     让一个物体，按照指定时长，指定的方向从某个地方运动到某个地方。
//参数：
// DOM元素
// 样式属性：attr
// 结束的值
// 时长（单位是毫秒）
//返回值：无

function moveObj03(domObj,attr,endValue,timeLong){
	
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let direction = endValue>currValue?1:-1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";		
	},timeSpace);
}


//链式运动会用到
//此函数带一个回调函数的参数，目的是，当运动结束后，会调用该函数
function moveObj04(domObj,attr,endValue,timeLong,func){
	
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let direction = endValue>currValue?1:-1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
			func&&func();
		}		
		//3、改变外观
		domObj.style[attr] = currValue+"px";		
	},timeSpace);
}


/*
参数：
domObj：要运动物体（dom元素）
attr:样式属性
endValue:结束值
timeLong:时长
*/


//让某个dom元素花多长时间到达目的地

function moveObj05(domObj,attr,endValue,timeLong){
	
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let direction = endValue>currValue?1:-1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		let temp = currValue;
		if(attr!="opacity"){
			temp = temp+"%";
		}
		domObj.style[attr] = temp;		
	},timeSpace);
}


//淡入：让某个dom元素花多长时间淡入

function fadeIn(domObj,timeLong){
	moveObj05(domObj,"opacity",1,timeLong);	
}

//淡出：
function fadeOut(domObj,timeLong){
	moveObj05(domObj,"opacity",0,timeLong);	
}

//淡入淡出：两张图片的淡入淡出
function fadeInOut(inDomObj,outDomObj,timeLong){
	let endValue=1;
	
	let currValue = 0;
	let direction = 1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		inDomObj.style.opacity = currValue;		
		outDomObj.style.opacity = 1-currValue;		
		
	},timeSpace);	
}

//多属性运动:
//单属性运动，每次只改一个属性的值，多属性每次需要改多个属性的值（用循环）
/*
animate(
		$("box")
		,
		{
			"width":500,
			"height":400,
			"left":500
		}
		,
		2000);
		
*/		


function animate(domObj,attrObj,timeLong){
	
	let currValueObj = {};
	for(let key in attrObj){//"width"
		//currValueObj["width"] = parseFloat(getStyle(domObj,"width"))
		currValueObj[key] =parseFloat(getStyle(domObj,key));		
	}	
	
	//let direction = endValue>currValue?1:-1;
	let directionObj = {};
	for(let key in attrObj){
		directionObj[key] = attrObj[key]>currValueObj[key]?1:-1;		
	}
	
	let timeSpace = 16;
	//let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	let stepObj = {};
	for(let key in attrObj){
		stepObj[key] = Math.abs(attrObj[key]-currValueObj[key])/timeLong*timeSpace;
	}
	
	let myTimer = setInterval(function(){
		//1、改变数据
		//currValue = currValue+direction*step;
		for(let key in currValueObj){//"width"
			currValueObj[key] =currValueObj[key]+directionObj[key]*stepObj[key];
		}	
		
		//2、处理边界
		let isOver = false;//表示是否到终点
		for(let key in currValueObj){
			if(Math.abs(currValueObj[key]-attrObj[key])<=stepObj[key]){
				currValueObj[key]=attrObj[key];
				isOver = true;
			}
		}
		//isOver&&clearInterval(myTimer);
		if(isOver){
			console.log(1);
			clearInterval(myTimer);	
		}
		
		//3、改变外观
		for(let key in currValueObj){
			let temp = currValueObj[key];
			if(key!="opacity"){
				temp = temp+"px";
			}
			domObj.style[key] = temp;			
		}
	},timeSpace);
}