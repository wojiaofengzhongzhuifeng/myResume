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