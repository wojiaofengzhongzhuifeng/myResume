

/*
!function(){
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
}()
*/

//简单使用 MVC 改变代码结构
/*


!function(){
    var view = document.querySelector("div.nav")

    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        li: null,
        bindEvents: function(){
            var litags = view.querySelectorAll("ul li")
            for(var i = 0;i < litags.length;i++){
                litags[i].addEventListener("mouseenter", (x) => {
                    var li = x.currentTarget
                    li.classList.add("active")
                })

                litags[i].addEventListener("mouseleave", (x) => {
                    var li = x.currentTarget
                    li.classList.remove("active")
                })
            }            
        },
    }
    controller.init(view)
}()
 */




//将功能拆分的更细致, 答案
/*
!function(){
    var view = document.querySelector("div.nav")

    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        li: null,
        bindEvents: function(){
            var litags = view.querySelectorAll("ul li")
            for(var i = 0;i < litags.length;i++){

                litags[i].addEventListener("mouseenter", (x) => {
                    this.li = x.currentTarget
                    this.addActive()
                })

                litags[i].addEventListener("mouseleave", (x) => {
                    this.li = x.currentTarget
                    this.deleteActive()
                })
            }            
        },
        addActive: function(){
            this.li.classList.add("active")
        },
        deleteActive: function(){
            this.li.classList.remove("active")
        }
    }
    controller.init(view)
}()

*/

!function(){

    let view = View("div.nav")

    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        li: null,
        bindEvents: function(){
            var litags = view.querySelectorAll("ul li")
            for(var i = 0;i < litags.length;i++){
                litags[i].addEventListener("mouseenter", (x) => {
                    this.li = x.currentTarget
                    this.addActive()
                })

                litags[i].addEventListener("mouseleave", (x) => {
                    this.li = x.currentTarget
                    this.deleteActive()
                })
            }            
        },
        addActive: function(){
            this.li.classList.add("active")
        },
        deleteActive: function(){
            this.li.classList.remove("active")
        }
    }
    controller.init(view)
}()












