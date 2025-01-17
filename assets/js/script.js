// PRIMER ITEM BORDE!!!!

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

// SEGUNDO ITEM STICKERS!!!!

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

// TERCER ITEM CONSTRASEÑA!!!!

const numero1 = document.querySelector("#psw1")
const numero2 = document.querySelector("#psw2")
const numero3 = document.querySelector("#psw3")
const btnPswrd = document.querySelector(".btn-pswrd")
const resultado = document.querySelector(".mensajePswrd")


btnPswrd.addEventListener("click", ()=>{
    let contrasena = numero1.value + numero2.value + numero3.value
    
    if(contrasena == "911"){
        resultado.innerHTML = "Password 1 Correcto!!"
    } else if (contrasena == 714){
        resultado.innerHTML = "Password 2 Correcto!!"
    } else { 
        resultado.innerHTML = "Password Incorrecto"
    }
})