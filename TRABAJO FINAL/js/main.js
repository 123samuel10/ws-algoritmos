const url='https://62a8f566943591102bac34e3.mockapi.io/api/v1/'

const getInfo=async(objeto)=>{ //async devuelve una promesa
    const answer= await fetch(url+objeto);
    return answer.json();
}
let productos = []
async function getUsers(){
    productos=await getInfo("Productos");
    console.log(productos)
}
getUsers()
baseDedato=[
        {
        id:1,
        nombre:"Portatil Gamer",
        precio:3000000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Portatil Mesa",
        precio:2500000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Portatil Gamer de colores",
        precio:2200000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Xiaomi",
        precio:1500000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Samsung",
        precio:400000,
        cuantos:0,
        },
        {
   
        id:1,
        nombre:"Phone",
        precio:4000000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"LG lavadora",
        precio:1300000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Lavadora indocul",
        precio:700000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Lavadora haceb",
        precio:600000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Impresora Multifuncional",
        precio:650000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Impresora",
        precio:700000,
        cuantos:0,
        },
        {
        id:1,
        nombre:"Impresora Blanca",
        precio:620000,
        cuantos:0,   
        }
    ]
function enviar(){
    //portatil gamer uno
    let producto1=document.getElementById('nombreUno-producto').value;
    let cantidad1=document.getElementById('Cantidad-pordutoUno').value;
    let precio1=document.getElementById('precio1').value;
    //computador de mesa
    let producto2=document.getElementById('nombreDos-Producto').value;
    let cantidad2=document.getElementById('Cantidad-productoDos').value
    let precio2=document.getElementById('precio2').value;
    //computador gamer 2
    let producto3=document.getElementById('nombreTres-Producto').value;
    let cantidad3=document.getElementById('Cantidad-productoTres').value;
    let precio3=document.getElementById('precio3').value;
       //celular xiaomi
    let productoNumeroCuatro=document.getElementById('NombreXiaomi').value;
    let cantidadNumeroCuatro=document.getElementById('CantidadDeXiaomi').value;
    let precio4=document.getElementById('precio4').value;
    // celular sansung
    let producto5=document.getElementById('nombreProductoCinco').value;
    let cantidad5=document.getElementById('numeroProductoCinco').value;
    let precio5=document.getElementById('precio5').value
    //celular Phone
    let producto6=document.getElementById('nombreSeis-Producto').value;
    let cantidad6=document.getElementById('Cantidad-productoSeis').value;
    let precio6=document.getElementById('precio6').value;
    //lavadora LG
    let producto7=document.getElementById('nombreSiete-producto').value;
    let cantidad7=document.getElementById('Cantidad-pordutoSiete').value;
    let precio7=document.getElementById('precio7').value;
    //Lavadora indocul
    let producto8=document.getElementById('nombreOcho-producto').value;
    let cantidad8=document.getElementById('Cantidad-pordutoOcho').value
    let precio8=document.getElementById('precio8').value;
    //Lavadora haceb
    let producto9=document.getElementById('nombreNueve-producto').value;
    let cantidad9=document.getElementById('Cantidad-productoNueve').value;
    let precio9=document.getElementById('precio9').value;

    let producto10=document.getElementById('nombreDiez-producto').value;
    let cantidad10=document.getElementById('Cantidad-productoDiez').value;
    let precio10=document.getElementById('precio10').value
   
    let producto11=document.getElementById('nombreOnce-producto').value;
    let cantidad11=document.getElementById('Cantidad-productoOnce').value;
    let precio11=document.getElementById('precio11').value

    let producto12=document.getElementById('nombreDoce-producto').value;
    let cantidad12=document.getElementById('Cantidad-productoDoce').value;
    let precio12=document.getElementById('precio12').value

    //funcion para mostrar por pantalla    
    capturar= function capturar(producto1,cantidad1,precio1,producto2,cantidad2,precio2,producto3,cantidad3,precio3,productoNumeroCuatro,cantidadNumeroCuatro,precio4,producto5,cantidad5,precio5,producto6,
        cantidad6,precio6,producto7,cantidad7,precio7,producto8,cantidad8,precio8,producto9,cantidad9,precio9,producto10,cantidad10,precio10,producto11,cantidad11,precio11,producto12,cantidad12,precio12){ 
        this.producto1=producto1;                          //muestra
        this.cantidad1=cantidad1;                   //muestra
        this.precio1=precio1;

        this.producto2=producto2;
        this.cantidad2=cantidad2;
        this.precio2=precio2;

        this.producto3=producto3;
        this.cantidad3=cantidad3;
        this.precio3=precio3;

        this.productoNumeroCuatro=productoNumeroCuatro;
        this.cantidadNumeroCuatro=cantidadNumeroCuatro;
        this.precio4=precio4;

        this.producto5=producto5;
        this.cantidad5=cantidad5 ;  
        this.precio5=precio5;
        
        this.producto6=producto6;
        this.cantidad6=cantidad6;
        this.precio6=precio6;

        this.producto7=producto7;
        this.cantidad7=cantidad7;
        this.precio7=precio7;

        this.producto8=producto8;
        this.cantidad8=cantidad8;
        this.precio8=precio8;

        this.producto9=producto9;
        this.cantidad9=cantidad9;
        this.precio9=precio9;

        this.producto10=producto10;
        this.cantidad10=cantidad10;
        this.precio10=precio10;

        this.producto11=producto11;
        this.cantidad11=cantidad11;
        this.precio11=precio11;

        this.producto12=producto12;
        this.cantidad12=cantidad12;
        this.precio12=precio12;
    }
nuevo=new capturar(producto1,cantidad1,precio1,producto2,cantidad2,precio2,producto3,cantidad3,precio3,productoNumeroCuatro,cantidadNumeroCuatro,precio4,producto5,cantidad5,precio5,producto6,cantidad6,precio6,producto7,cantidad7,precio7,
    producto8,cantidad8,precio8,producto9,cantidad9,precio9,producto10,cantidad10,precio10,producto11,cantidad11,precio11,producto12,cantidad12,precio12); //muestra
console.log(nuevo)//trasnformamos en objto     //muestra
agregar(); //con esta funcion añadimos ese objeto a un array (el procedimiento esta abajo  )                        //muestra

 

let resultadoUno=0;
let resultadoDos=0;
let resultadoTres=0;
let resultadoCuatro=0;
let resultadoCinco=0;
let resultadoSeis=0;
let resultadoSiete=0;
let resultadoOcho=0;
let resultadoNueve=0;
let resultadoDiez=0;
let resultadoOnce=0;
let resultadoDoce=0;


console.log(productoNumeroCuatro);
    baseDedato.forEach(elemeto=>{
        console.log(elemeto.nombre);
       if(elemeto.nombre===producto1 ){  
           resultadoUno+=elemeto.precio*cantidad1
        //    alert(`El total del portatil gamer 1 es ${resultadoUno}`);
       }
        else if(elemeto.nombre===producto2){
           resultadoDos+=elemeto.precio*cantidad2
        //    alert(`El total del computador de mesa es ${resultadoDos}`);
           
       }
       else if(elemeto.nombre===producto3  ){
           resultadoTres+=elemeto.precio*cantidad3
       
        //    alert( `El total del portatil gamer 2 es ${resultadoTres}`)
           
       }else if(elemeto.nombre===productoNumeroCuatro){
           console.log("Entre");
           console.log(cantidadNumeroCuatro);
           resultadoCuatro+=elemeto.precio*cantidadNumeroCuatro
        //    alert(`El total de celulares xiaomis es ${resultadoCuatro}`)
       }else if(elemeto.nombre===producto5){
           resultadoCinco+=elemeto.precio*cantidad5
        //    alert(`El total de celulares samsung es ${resultadoCinco}`)
       }else if(elemeto.nombre===producto6){
           resultadoSeis+=elemeto.precio*cantidad6;
        //    alert(`El total de los celulares Phones es ${resultadoSeis}`)
       }else if(elemeto.nombre===producto7){
           resultadoSiete+=elemeto.precio*cantidad7
        //    alert(`El total de las lavadoras Lg es ${resultadoSiete}`)
       }else if(elemeto.nombre===producto8){
           resultadoOcho+=elemeto.precio*cantidad8;
        //    alert(`El total de las lavadoras indocul es ${resultadoOcho}`)
       }else if(elemeto.nombre===producto9){
           resultadoNueve+=elemeto.precio*cantidad9;
        //    alert(`El total de lavadoras haceb es ${resultadoNueve}`)
       }else if(elemeto.nombre===producto10){
        resultadoDiez+=elemeto.precio*cantidad10
       }else if(elemeto.nombre===producto11){
        resultadoOnce+=elemeto.precio*cantidad11;
       }else if(elemeto.nombre===producto12){
        resultadoDoce+=elemeto.precio*cantidad12;
       }
     calcular=  function calcular(){
    
         let suma=0;
         suma=resultadoUno+resultadoDos+resultadoTres+resultadoCuatro+resultadoCinco+resultadoSeis+resultadoSiete+resultadoOcho+resultadoNueve+resultadoDiez+resultadoOnce+resultadoDoce;
         document.getElementById('totalProductoComprados').value+=`Señor cliente el total de los productos es ${suma}`
        

         if(suma>=30000000){
            bono();
            descuento=suma-bono;
            alert(`Hola, cliente se ha ganado un descuento aletaorio de ${bono}\n , Por superar la compra de 30.000.000, 
            osea que el total de su compra es de ${descuento}` )
            document.getElementById('totalProductoComprados').value+=` ,Pero el total que debe pagar seria :${descuento}`
                   
         }
    }
        function bono(){
            bono=Math.round(Math.random()*60000);
        }
    })
      }
//muestra(parte 2)//añade el objeto a un arreglo y lo muestra (hacemos eso para que se me vaya guardando la informacion que dijite el usuario)
var base=[];
function agregar(){
  
    base.push(nuevo);
    console.log(base)
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto1 +'</td><td>'+nuevo.cantidad1+ '</td>><td>'+nuevo.precio1+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto2+'</td><td>'+nuevo.cantidad2+ '</td>><td>'+nuevo.precio2+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto3+'</td><td>'+nuevo.cantidad3+ '</td>><td>'+nuevo.precio3+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.productoNumeroCuatro+'</td><td>'+nuevo.cantidadNumeroCuatro+ '</td>><td>'+nuevo.precio4+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto5+'</td><td>'+nuevo.cantidad5+ '</td>><td>'+nuevo.precio5+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto6+'</td><td>'+nuevo.cantidad6+ '</td>><td>'+nuevo.precio6+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto7+'</td><td>'+nuevo.cantidad7+ '</td>><td>'+nuevo.precio7+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto8+'</td><td>'+nuevo.cantidad8+ '</td>><td>'+nuevo.precio8+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto9+'</td><td>'+nuevo.cantidad9+ '</td>><td>'+nuevo.precio9+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto10+'</td><td>'+nuevo.cantidad10+ '</td>><td>'+nuevo.precio10+ '</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto11+'</td><td>'+nuevo.cantidad11+ '</td>><td>'+nuevo.precio11+'</td>'
    document.getElementById('table').innerHTML+='<td>'+nuevo.producto12+'</td><td>'+nuevo.cantidad12+ '</td>><td>'+nuevo.precio12+'</td>'


}
//funciones donde te muestran los productos mas caros y los mas baratos
 function PrecioMayor(){
    baseDedato.forEach(element=>{
        if(element.precio>=2200000){
            document.getElementById('mostrarPrecios').value+= ` ${element.nombre} - ${element.precio} \n `
        }    
     })
    }
 function precioMenor(){
    baseDedato.forEach(element=>{
        if(element.precio<=1500000){
            document.getElementById('mostrarPreciosDos').value+=`${element.nombre} - ${element.precio} \n`
        }
    })
}
function Ccarrito(){
    window.location.reload();
}





