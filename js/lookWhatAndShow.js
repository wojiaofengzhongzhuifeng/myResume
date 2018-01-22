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

var litags = document.querySelectorAll("div.nav ul li")
for(var i = 0;i < litags.length;i++){
    litags[i].onmouseenter = function(x){
        var li = x.currentTarget
        li.classList.add("active")
    }
    litags[i].onmouseleave = function(x){
        var li = x.currentTarget
        li.classList.remove("active")
    }
}