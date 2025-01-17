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



const sticker1 = document.querySelector("#stik1")
const sticker2 = document.querySelector("#stik2")
const sticker3 = document.querySelector("#stik3")
const btn = document.querySelector(".btnVerificar")
const parrafo = document.querySelector(".resultado")


btn.addEventListener("click", ()=>{
    const sumaTotal = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value)
    console.log(sumaTotal)

    if(sumaTotal <= 10){
      parrafo.innerHTML = "Total de Stickers Seleccionados : " + sumaTotal
    }else {
        parrafo.innerHTML = "Seleccionaste Demasaidos Stickers!!"
    }
    
    
})
