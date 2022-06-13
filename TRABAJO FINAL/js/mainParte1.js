document.addEventListener("DOMContentLoaded", function () {//ponemos el evento DOMContentLoaded, en el cual consiste en ejeecutar todo el codigo de js,cuando todo el html ha cargado
    var localStorage = window.localStorage//Guardamos el localStorage en una variable
    var infoProductos=localStorage.getItem("infoProductos") ? localStorage.getItem("infoProductos").split(",") : [] //infoProductos es la variable donde estan almacenados
    //los  productos. y esto es un If ternario.
    

    localStorage.clear()// con esto limpiamos el localStorage
//con la funcion agregar al inicio, como lo dice su nombre guardamos en el arreglo lo que dijite el usuario y se agregara en la zona principal mediante el unshift(metodo el arreglo)
Guardar= function guardar() {
    infoProductos.unshift([document.getElementById("nombreUno-producto").value,document.getElementById("precio1").value,document.getElementById("Cantidad-pordutoUno").value])
    infoProductos.push([document.getElementById("nombreDos-Producto").value,document.getElementById("precio2").value,document.getElementById("Cantidad-productoDos").value])
    infoProductos.push([document.getElementById("nombreTres-Producto").value,document.getElementById("precio3").value,document.getElementById("Cantidad-productoTres").value])
    infoProductos.push([document.getElementById("NombreXiaomi").value,document.getElementById("precio4").value,document.getElementById("CantidadDeXiaomi").value])
    infoProductos.push([document.getElementById("nombreProductoCinco").value,document.getElementById("precio5").value,document.getElementById("numeroProductoCinco").value])
    infoProductos.push([document.getElementById("nombreSeis-Producto").value,document.getElementById("precio6").value,document.getElementById("Cantidad-productoSeis").value])
    infoProductos.push([document.getElementById("nombreSiete-producto").value,document.getElementById("precio7").value,document.getElementById("Cantidad-pordutoSiete").value])
    infoProductos.push([document.getElementById("nombreOcho-producto").value,document.getElementById("precio8").value,document.getElementById("Cantidad-pordutoOcho").value])
    infoProductos.push([document.getElementById("nombreNueve-producto").value,document.getElementById("precio9").value,document.getElementById("Cantidad-productoNueve").value])
    infoProductos.push([document.getElementById("nombreDiez-producto").value,document.getElementById("precio10").value,document.getElementById("Cantidad-productoDiez").value])
    infoProductos.push([document.getElementById("nombreOnce-producto").value,document.getElementById("precio11").value,document.getElementById("Cantidad-productoOnce").value])
    infoProductos.push([document.getElementById("nombreDoce-producto").value,document.getElementById("precio12").value,document.getElementById("Cantidad-productoDoce").value])
    localStorage.setItem('infoProductos', infoProductos)
    mostrarProductos(infoProductos)

}

//con esta funcion mostramos en el cuadro hecho por html, la info que digite el usuario
function mostrarProductos(infoProductos) {
document.getElementById("listado").value = "";
infoProductos.forEach(producto => {
    document.getElementById("listado").value += `Nombre: ${producto[0]}, Precio: ${producto[1]}, Cantidad: ${producto[2]} \n`;


});

buscarProducto=function buscarProducto(){
    let productosB=document.getElementById('nombreProducto').value;
    let encontarProductos=infoProductos.filter(element=>element[0]===productosB);
    document.getElementById('productoBuscado').value +=`Nombre: ${encontarProductos[0][0]}, Precio: ${encontarProductos[0][1]}, Cantidad: ${encontarProductos[0][2]}`
}
AumentarUno=function AumentarUno(){
    let aumentar=document.getElementById('AumentarCantidad').value;
    infoProductos.forEach(element=>{
        if(element[0]===aumentar){
            element[2]++
        }
    })
    localStorage.setItem('infoProductos',infoProductos);
    mostrarProductos(infoProductos)
}
}
disminuirCantidad=function disminuirCantidad(){
    let disminuir=document.getElementById('disminuir').value
    infoProductos.forEach(element=>{
        if(element[0]===disminuir){
            element[2]--

        }

    })
    localStorage.setItem('infoProductos',infoProductos)
    mostrarProductos(infoProductos)
}
eliminarProducto=function eliminarProducto(){
    let eliminar=document.getElementById('eliminar').value;
    let productoEliminar=infoProductos.filter(element=>element[0]!==eliminar)
    infoProductos=productoEliminar;
    window.alert('Hola usuario, se ha eliminado el producto')
    mostrarProductos(infoProductos)
}

})
   
