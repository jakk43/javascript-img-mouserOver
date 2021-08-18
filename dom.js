let smallimgs= document.querySelectorAll(".smallimg")
let bigimg = document.querySelector(".bigimg")

function toBigImage(event){
    bigimg.src = event.target.src;
}
function toBigImageremove(){
    bigimg.src = "";
}

// smallimgs.addEventListener("mouseover",toBigImage)

smallimgs.forEach((smallimg)=>{
    smallimg.addEventListener("mouseover",toBigImage)
    smallimg.addEventListener("mouseout",toBigImageremove)
})