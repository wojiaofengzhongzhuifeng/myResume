/*
!function(){
    //监听页面滚动, 当页面滚动的时候,就让 nav sticky
    window.addEventListener("scroll", function(){
        var scrollHeight = window.scrollY

        if (scrollHeight === 0) {
            navCt1.classList.remove("active")
        } else if(scrollHeight >= 819 && scrollHeight <= 900){
            activeGap()
        }
        else {
            navCt1.classList.add("active")
        }
    })


    function activeGap(){
        let gap = document.querySelectorAll(".gap")
        for(var i = 0; i < gap.length; i++){
            let level = gap[i].getAttribute("data-level")
            gap[i].style.width = `${level}%`
        }
    }
}()
*/

//使用 MVC 思想封装代码

!function(){
    var view = document.querySelector("#navCt1")
    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            window.addEventListener("scroll", () => {
                var scrollHeight = window.scrollY
                if (scrollHeight === 0) {
                    this.deleteActive()
                } else if(scrollHeight >= 819 && scrollHeight <= 900){
                    this.activeGap()
                }
                else {
                    this.addActive()
                }
            })            
        },
        addActive: function(){
            this.view.classList.add("active")
        },
        deleteActive: function(){
            this.view.classList.remove("active")
        },
        activeGap: function(){
            let gap = document.querySelectorAll(".gap")
            for(var i = 0; i < gap.length; i++){
                let level = gap[i].getAttribute("data-level")
                gap[i].style.width = `${level}%`
            }
        }
    }
    controller.init(view)
}()
