// let intentos = 0
// let usuarioGuardado = "usuariox"
// let contraGuardada = "12345"
// do{
//     let usuarioIngresado = prompt("Ingrese su nombre de usuario:")
//     let contraIngresada = prompt("Escriba su contraseña:")
//     if((contraIngresada != contraGuardada) || (usuarioIngresado != usuarioGuardado)){
//         intentos += 1
//         alert(`Incorrecto, vas ${intentos} de 5 intentos`)
//     }    
//     if(contraGuardada === contraIngresada){
//         alert("¡Bienvenido, " + usuarioGuardado + "!")
//         break
//     }
// }while(intentos < 5)
//Productos:
let productos = [
    {id: 1, nombre: "Funko pops", categoria: "coleccion", precio: 999.99, stock: 10},
    {id: 2, nombre: "Figuras de acción", categoria: "coleccion", precio: 1200.50, stock: 9},
    {id: 3, nombre: "Juguetes", categoria: "jugables", precio: 3500, stock: 20},
    {id: 4, nombre: "Mangas", categoria: "literatura", precio: 850.50, stock: 15},
    {id: 5, nombre: "CDs", categoria: "audiovisual", precio: 3500, stock: 10},
    {id: 6, nombre: "Camisetas", categoria: "ropa", precio: 5000, stock: 19},
    {id: 7, nombre: "Pulseras", categoria: "accesorios", precio: 800, stock: 18},
    {id: 8, nombre: "Cosplays", categoria: "disfraces", precio: 6500, stock: 16}
]
let artiContenedor = document.getElementById("articulos")
productos.forEach(producto => {
    let tarjetaDeArticulo = document.createElement("article")
    tarjetaDeArticulo.innerHTML = `<h3>${producto.nombre}</h3>`
    artiContenedor.append(tarjetaDeArticulo)
})

let elegir = document.getElementById("elige")
elegir.onclick = funcionCartel
function funcionCartel(){
    let buscador = prompt(`                                              ¿Qué buscas?
    Funko pops
    Figuras de acción
    Juguetes
    Mangas
    CDs
    Camisetas
    Pulseras
    Cosplays`)
    if ((buscador === "") || (buscador === " ")){
        alert("No hay resultados")
    }if(buscador === "funko pops"){
        let pregunta = confirm(`¿Quieres Funko pops?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Funko pops")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "figuras de accion"){
        let pregunta = confirm(`¿Quieres Figuras de acción?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Figuras de acción")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "juguetes"){
        let pregunta = confirm(`¿Quieres Juguetes?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Juguetes")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "mangas"){
        let pregunta = confirm(`¿Quieres Mangas?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Mangas")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "cds"){
        let pregunta = confirm(`¿Quieres CDs?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "CDs")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "camisetas"){
        let pregunta = confirm(`¿Quieres Camisetas?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Camisetas")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "pulseras"){
        let pregunta = confirm(`¿Quieres Pulseras?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Pulseras")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }if(buscador === "cosplays"){
        let pregunta = confirm(`¿Quieres Cosplays?`)
        if(pregunta === true){
            let buscaProductos = productos.filter(elem => elem.nombre === "Cosplays")
            console.log(buscaProductos)
            alert("Abre la consola X'D")
        }else{
            alert("Ah. Ok... :'v")
        }
    }
}