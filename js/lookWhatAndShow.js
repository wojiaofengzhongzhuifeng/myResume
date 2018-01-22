var heightTags = document.querySelectorAll("[data-x]");
var divTops = []
var navLi = document.querySelectorAll("div.nav>ul.clearfix>li").length - 1;



for(var i = 0;i<heightTags.length;i++){
    var divTop = heightTags[i].offsetTop + 250
    divTops.push(divTop)
}

// 监听页面的滑动, 用户浏览到什么位置就在 nav 上高亮那个标题
window.addEventListener("scroll", function(){
    var scrollHeight = window.scrollY

    addHeightLightAndremoveOffset()
    //添加heightlight效果
    function addHeightLightAndremoveOffset(){
        var closeIndex = findCloseIndex(scrollHeight, divTops)
        for (var i = 0; i < divTops.length; i++){
            heightTags[i].classList.remove("active")
        }
        heightTags[closeIndex].classList.remove("offset")
        var heightLightId = heightTags[closeIndex].id
        var heightLightATag = document.querySelector('a[href="#' + heightLightId + '"]')//   括号里面的字符串为'a[href="#card"]'
        var heightLightLiTag = heightLightATag.parentNode
        var allHeightLightLiTag = heightLightLiTag.parentNode.children
        for(var i = 0; i < allHeightLightLiTag.length;i++){
            allHeightLightLiTag[i].classList.remove("heightLight")
        }

        allHeightLightLiTag[closeIndex].classList.add("heightLight")
    }
})


for(var i = 0; i < heightTags.length; i++){
    heightTags[i].classList.add("offset")
}

//输入 页面滑动的距离 和 divTops 数组 ,返回距离与数组每个值的差最小的下标
function findCloseIndex (height, array){
    var closeIndex = 0
    var closeNumber = Math.abs(height - array[0])
    for(var i = 1;i < array.length;i++){
        var everyNumber = Math.abs(array[i] - height)
        if(everyNumber < closeNumber){
            closeIndex = i
        }
    }
    return closeIndex
}
//