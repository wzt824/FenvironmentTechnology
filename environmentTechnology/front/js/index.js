$(function(){
    $("#TopBox").load("publicT.html");
    $("#FooterBox").load("publicF.html");

    //调用动态创建函数
    productshow();

})

//动态创建
function productshow(){
    $.get("productshows.nd",{"goodsType":"产品展示"},function(str){
        let arr=JSON.parse(str);
        let htmlStr="";
        for(let i in arr){
            htmlStr+='<div class="section1_bottom1">\
            <div class="sectionBox">\
                <div class="section1_bottomImg">\
                    <img src="'+arr[i].goodsImg+'">\
                </div>\
                <div class="section1_bottomBg">\
                    '+arr[i].goodsBg+'\
                </div>\
            </div>\
            <h3>'+arr[i].goodsName+'</h3>\
        </div>';
        }
        $(".section1_bottomBox").html(htmlStr);
        xiaoguo();
    });


    $.get("productshows.nd",{"goodsType":"风光景点"},function(str){
        //productshows.nd在severe.js里面获取到扩展名依次进入router.js和routerinfo.js,productshows对应到routerinfo.js里
        let arr=JSON.parse(str);//str是字符串，将其进行转换
        let htmlStr="";
        for(let i in arr){
            htmlStr+='<div class="section1_bottom1">\
            <div class="sectionBox">\
                <div class="section1_bottomImg">\
                    <img src="'+arr[i].goodsImg+'">\
                </div>\
                <div class="section1_bottomBg">\
                    '+arr[i].goodsBg+'\
                </div>\
            </div>\
            <h3>'+arr[i].goodsName+'</h3>\
        </div>';
        }
        $(".section1_bottomBox1").html(htmlStr);
        xiaoguo();
    });
}



function xiaoguo(){
    //滑过加遮罩层
   let sectionBox = $(".sectionBox");
   let section1_bottomImg=$(".section1_bottomImg");
   let section1_bottomBg=$(".section1_bottomBg");
   for(let i=0;i<sectionBox.length;i++){
       sectionBox[i].onmouseenter=function(){
           section1_bottomBg[i].style.opacity=1;
           $(".section1_bottomBg").stop().animate({
               "top":0
           },800);
       }
       sectionBox[i].onmouseleave=function(){
           section1_bottomBg[i].style.opacity=0;
           $(".section1_bottomBg")[i].style.top="170px";
           $(".section1_bottomBg").stop().animate({
               "top":170
           },10)
       }
   }

   
   $(".section1_left")[0].onmouseenter=function(){
       $(".section1_left").find("h3").css({"color":"#18d202"});
       $(".section1_left").find("span").css({"color":"#18d202"});
   }
   $(".section1_left")[0].onmouseleave=function(){
       $(".section1_left").find("h3").css({"color":"black"});
       $(".section1_left").find("span").css({"color":"#999"});
   }
   
   //鼠标滑过字变色
   let section1_right=$(".section1_right")[0].children;
   for(let i=0;i<section1_right.length;i++){
       section1_right[i].onmouseenter=function(){
           $(this).css({"color":"#18d202","font-weight":"600"})
       }
       section1_right[i].onmouseleave=function(){
           $(this).css({"color":"#999","font-weight":"100"})
       }
   }

   //footer部分
   for(let i=0;i<$(".compare_bottom1").length;i++){
       $(".compare_bottom1")[i].onmouseenter=function(){
           $(this).find("img").css({
               "top":20,
               "transition":"all 0.6s"
           });
           $(this).find("span").css({
               "opacity":1,
               "transition":"all 0.6s"
           })
       }
       $(".compare_bottom1")[i].onmouseleave=function(){
           $(this).find("img").css({
               "top":34,
               "transition":"all 0.6s"
           });
           $(this).find("span").css({
               "opacity":0,
               "transition":"all 0.6s"
           })
       }
   }
}