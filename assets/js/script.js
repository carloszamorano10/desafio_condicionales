const img = document.querySelector(".imagen")
const click = document.querySelector(".anchore")

let borde = 0

click.addEventListener("click", ()=>{
    
    if(borde == "0"){
        img.style.border = "10px solid red"
        borde = 1
    } else{
        img.style.border = "0px"
        borde = 0
    }
})

