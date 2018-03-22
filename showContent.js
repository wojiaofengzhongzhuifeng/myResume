
let contentWay = document.querySelector("div.footer")
contentWay.addEventListener("click", function(e){
    e.preventDefault()
    let target = e.target
    if(target.nodeName.toLocaleLowerCase() === "a" || "svg" || "use"){
        let targetTag = useTagToSvg(target)
        console.log(targetTag)
        let index = target.parentNode.getAttribute("data-index")
        console.log(index)
        window.location.href = index


    }
})

function useTagToSvg(dom){
    let changeDom = dom
    if(changeDom.nodeName.toLocaleLowerCase() === "svg"){
        //不做任何事情
        return changeDom
    } else {
        console.log("right")
        changeDom = changeDom.parentNode
        return changeDom
    }
}