//2、针对，内部和外部的样式如何获取？
//  1)、针对IE，用currentStyle
//  2)、针对其它主流浏览器，用window.getComputedStyle(dom对象)获取到了所有的样式属性

//功能：获取某个DOM元素的样式属性

function getStyle(domObj,attr){
	if(domObj.currentStyle){
		//domObj.currentStyle.attr;//这是不对的，因为并没有名字为attr的属性
		return domObj.currentStyle[attr];//如果对象的属性名是变量的方式表示，就只能用方括号。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}