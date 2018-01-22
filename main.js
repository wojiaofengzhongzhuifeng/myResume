var heightTags = document.querySelectorAll("[data-x]");
var divTops = []
var navLi = document.querySelectorAll("div.nav>ul.clearfix>li").length - 1;

for(var i = 0;i<heightTags.length;i++){
    var divTop = heightTags[i].offsetTop + 250
    divTops.push(divTop)
} 
// 加载动画
window.onload = function () {
    welcome.classList.add("active")
}







































