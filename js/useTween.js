

/* 
//按照过程写的代码
!function(){
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

}()
*/

//使用 MVC 思想完成的代码
!function(){
    let view = View("div.nav")

    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.initAnimate()
            this.bindEvents()
        },
        initAnimate: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        aTags: null,
        bindEvents: function(){
            this.aTags =  view.querySelectorAll("ul > li > a")
            var aTags = this.aTags
            for(let i=0; i<aTags.length;i++){
                aTags[i].addEventListener("click", (x) => {
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute("href")
                    console.log(href)
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                })
            }            
        },
        scrollToElement: function(element){
            console.log(element)
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
    controller.init(view)
}()

