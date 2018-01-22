//监听页面滚动, 当页面滚动的时候,就让 nav sticky
window.addEventListener("scroll", function(){
    var scrollHeight = window.scrollY

    if (scrollHeight === 0) {
        navCt1.classList.remove("active")
        rsAndCard.classList.remove("active")
    } else if(scrollHeight >= 819 && scrollHeight <= 900){
        activeGap()
        // alert("sssss")
    }
    else {
        navCt1.classList.add("active")
        rsAndCard.classList.add("active")
    }
})


function activeGap(){
    let gap = document.querySelectorAll(".gap")
    for(var i = 0; i < gap.length; i++){
        let level = gap[i].getAttribute("data-level")
        gap[i].style.width = `${level}%`
    }
}