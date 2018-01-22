var heightTags = document.querySelectorAll("[data-x]");
var divTops = []
var navLi = document.querySelectorAll("div.nav>ul.clearfix>li").length - 1;
console.log(navLi)
for(var i = 0;i<heightTags.length;i++){
    var divTop = heightTags[i].offsetTop + 250
    divTops.push(divTop)
} 
// 加载动画
window.onload = function () {
    welcome.classList.add("active")
}
// 监听页面的滑动
window.onscroll = function (x) {
    var scrollHeight = window.scrollY

    if (scrollHeight === 0) {
        navCt1.classList.remove("active")
        rsAndCard.classList.remove("active")
    } else if(scrollHeight >= 819){
        activeGap()
        // alert("sssss")
    }
    else {
        navCt1.classList.add("active")
        rsAndCard.classList.add("active")
    }



    addHeightLight()
    //添加heightlight效果
    function addHeightLight(){
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


}

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








//使用外部的js库:tween.js完成平滑的效果
var aTags =  document.querySelectorAll("div.nav > ul > li > a")
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);


for(let i=0; i<aTags.length;i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute("href")
        console.log(href)
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = {y:currentTop}
        var t = Math.abs((s/100)*300)
        if(t>500){t=500}
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y:targetTop }, t) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function() { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0, coords.y)
            })
            .start(); // Start the tween immediately.
    }
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



function activeGap(){
    let gap = document.querySelectorAll(".gap")
    for(var i = 0; i < gap.length; i++){
        let level = gap[i].getAttribute("data-level")
        gap[i].style.width = `${level}%`
    }
}


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})






