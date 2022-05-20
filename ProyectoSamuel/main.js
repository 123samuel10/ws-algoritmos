document.addEventListener("DOMContentLoaded", function () {
    var localStorage = window.localStorage
    var infoProductos = localStorage.getItem("infoProductos") ? localStorage.getItem("infoProductos").split(",") : []
    
    organizarData()
    localStorage.clear()// con esto limpiamos el localStorage

    // mostrarProductos(infoProductos)
    
    var totalProductos = infoProductos.length
    document.getElementById("totalProductos").value = totalProductos

    var valorTotalProductos = obtenerTotalPrecios()
    document.getElementById("valorTotalProductos").value = valorTotalProductos


    //con la funcion agregar al inicio, como lo dice su nombre guardamos en el arreglo lo que dijite el usuario y se agregara en la zona principal mediante el unshift(metodo el arreglo)
    agregarInicio = function agregarInicio() {
        infoProductos.unshift([document.getElementById("nombre").value,document.getElementById("categoria").value, document.getElementById("precio").value, document.getElementById("cantidad").value])
        localStorage.setItem('infoProductos', infoProductos)
        mostrarProductos(infoProductos)
    }


    //aqui agregamos lo que digite el usuario al final (mediante el metod push) y se guardara todo en un arreglo 
    agregarFinal = function agregarFinal() {
        infoProductos.push([document.getElementById("nombre").value,document.getElementById("categoria").value, document.getElementById("precio").value, document.getElementById("cantidad").value])
        localStorage.setItem('infoProductos', infoProductos)
        mostrarProductos(infoProductos)
    }

    contarCategoria = function contarCategoria() {
        let categoria = document.getElementById("categoriaProductosTotal").value
        let totalProductosCategoria = infoProductos.filter(producto => producto[1]===categoria)
        document.getElementById("totalProductosCategoria").value = totalProductosCategoria.length
    }

    buscarProducto = function buscarProducto() {
        let nombreProducto = document.getElementById("nombreProducto").value
        let producto = infoProductos.filter(producto => producto[0] === nombreProducto)
        document.getElementById("productoBuscado").value = `Nombre: ${producto[0][0]}, Categoria: ${producto[0][1]}, Precio: ${producto[0][2]}, Cantidad: ${producto[0][3]}`
    }

    eliminarProducto = function eliminarProducto(){
        let nombreProductoEliminar = document.getElementById("nombreProductoEliminar").value
        let productos = infoProductos.filter(producto => producto[0] !== nombreProductoEliminar)
        infoProductos = productos
        localStorage.setItem('infoProductos', infoProductos)
        window.alert("Producto Eliminado!");
        mostrarProductos(infoProductos)
    }
// --------------------------------------------------------------------------------------------------------------
    agregarCantidad = function agregarCantidad(){
        let nombreProductoAgregar = document.getElementById("nombreProductoAgregar").value
        infoProductos.forEach(producto => { 
            if(producto[0] === nombreProductoAgregar){
                producto[3]++
            }
        })
        localStorage.setItem('infoProductos', infoProductos)
        mostrarProductos(infoProductos)
    }

    disminuirCantidad = function disminuirCantidad(){
        let nombreProductoDisminuir = document.getElementById("nombreProductoDisminuir").value
        infoProductos.forEach(producto => { 
            if(producto[0] === nombreProductoDisminuir){
                producto[3]--
            }
        })
        localStorage.setItem('infoProductos', infoProductos)
        mostrarProductos(infoProductos)
    }

    listarAlfabetico = function listarAlfabetico() {
        infoProductos.sort(function (a, b) {
            if (a[0] > b[0]) {
              return 1;
            }
            if (a[0] < b[0]) {
              return -1;
            }
          
            return 0;
          });
          console.log(infoProductos);
        localStorage.setItem('infoProductos', infoProductos)
        mostrarProductos(infoProductos)
    }
    // ---------------------------------------------------------------------------------

    function organizarData() {
        let aux = []
        if (infoProductos.length > 0) {
            for (let i = 0; i < infoProductos.length; i += 4) {
                aux.push([infoProductos[i], infoProductos[i + 1], infoProductos[i + 2], infoProductos[i + 3]])
            }
        }
        infoProductos = aux
    }

    //con esta funcion mostramos en el cuadro hecho por html, la info que digite el usuario
    function mostrarProductos(infoProductos) {
        document.getElementById("listado").value = "";
        infoProductos.forEach(producto => {
            document.getElementById("listado").value += `Nombre: ${producto[0]}, Categoria: ${producto[1]}, Precio: ${producto[2]}, Cantidad: ${producto[3]} \n`;
        });
    }

    function obtenerTotalPrecios(){
        let valorTotal = 0
        infoProductos.forEach(producto => {
            valorTotal+=Number(producto[2])
        })
        return valorTotal
    }
});
