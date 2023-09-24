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
const input  = document.getElementById("buscador")
const boton = document.getElementById("elige")
const filtrar = ()=>{
    articulos.innerHTML = ""
    const texto = buscador.value.toLowerCase()
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase()
        if(nombre.indexOf(texto)!== -1){
            articulos.innerHTML += `
            <h3>${producto.nombre} - Precio: $${producto.precio}</h3>`
        }
    }
    if(articulos.innerHTML === ""){
        articulos.innerHTML += `
        <h3>Sin Resultados</h3>`
    }
}
boton.addEventListener("click", filtrar)
articulos.addEventListener("keyup", filtrar)
filtrar()
let guardadoLocal = (clave, valor) => {localStorage.setItem(clave, valor)}
for (let producto of productos){
    guardadoLocal("catalogo", JSON.stringify(productos))
}
let elegir = document.getElementById("elige")
elegir.onclick = funcionCartel
function funcionCartel(){
    Swal.fire({
        title: "¡Genial!",
        text: "¡A elegir!",
        icon: "success",
        confirmButtonText: "¡Capo!"
    })
}
let miFormu = document.getElementById("formulario")
miFormu.addEventListener("submit", validarFormulario)
function validarFormulario(e){
    e.preventDefault()
    let formulario = e.target
    console.log(formulario.children[0].value)
    console.log(formulario.children[1].value)
}