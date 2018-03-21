
let works = document.querySelectorAll(".img-works-ct")

for(let i=0;i<works.length;i++){
    //当鼠标悬浮在项目的时候, 展示项目的介绍
    works[i].addEventListener("mouseover", function(e){
        let clickImg = e.currentTarget
        let allDescription = clickImg.parentNode.parentNode.querySelectorAll(".description")
        for(let i=0;i<allDescription.length;i++){
            allDescription[i].classList.remove("active")
        }
        let description = clickImg.parentNode.querySelector(".description")
        description.classList.add("active")
    })

    //当点击项目的时候, 跳转到相应项目github中
    works[i].addEventListener("click", function(){

    })
}