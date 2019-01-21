$(function(){
    //滑过加遮罩层
    let sectionBox = $(".sectionBox");
    let section1_bottomImg = $(".section1_bottomImg");
    let section1_bottomBg = $(".section1_bottomBg");
    for (let i = 0; i < sectionBox.length; i++) {
        sectionBox[i].onmouseenter = function () {
            section1_bottomBg[i].style.opacity = 1;
            $(".section1_bottomBg").stop().animate({
                "top": 0
            }, 800);
        }
        sectionBox[i].onmouseleave = function () {
            section1_bottomBg[i].style.opacity = 0;
            $(".section1_bottomBg")[i].style.top = "170px";
            $(".section1_bottomBg").stop().animate({
                "top": 170
            }, 10)
        }
    }

    //选项卡切换
    let lis=$(".section_bottomTab").find("li");
    let section1=$(".section_bottomSec_cen").find(".section1");
    for(let i=0;i<lis.length;i++){
        lis[i].index=i;  //给每个Li赋一个下标
        lis[i].onmouseenter=function(){
            for(let j=0;j<lis.length;j++){
                lis[j].className="";
                section1[j].style.display="none";
            }
            this.className="fix";
           $(".show")[0].innerHTML= this.innerHTML;
            section1[this.index].style.display="block";
        }
    }
})