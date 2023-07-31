//inicio de sesión:
let intentos = 0
let usuarioGuardado = "Pacu"
let contraGuardada = "liarte"
do{
    let usuarioIngresado = prompt("Ingrese su nombre de usuario:")
    let contraIngresada = prompt("Escriba su contraseña")
    if((contraIngresada != contraGuardada) || (usuarioIngresado != usuarioGuardado)){
        intentos += 1
        alert(`Incorrecto, vas ${intentos} de 5 intentos`)
    }
    if(contraGuardada === contraIngresada){
        console.log(`¡Bienvenido, ${usuarioGuardado}!`)
        break
    }
}while(intentos < 5)
//Productos:
const productos = ["Funko pops", "Figuras de acción", "Juguetes", "Mangas", "CDs", "Camisetas", "Pulseras", "Cosplays"]
for(let i = 0; i < productos.length; i++){
    if(productos[i] === "Funko pops"){
        continue //Por falta de stock.
    }
    console.log(productos[i])
}