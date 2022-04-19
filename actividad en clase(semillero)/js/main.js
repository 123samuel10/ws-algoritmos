let estudiante=3;
let cantidad=100000;
let bono;
let pago;


for(var i=0; i<=estudiante; i++){
    let grado=prompt("En cual curso estas 10 o 11");
    let ciudad=prompt("¿En que ciudad vives?");

    if(i==0 && ciudad=="Armenia" && (grado==10 || grado==11)){
        alert("Usted tiene un descuento por la compra")
        bono=cantidad*0.50;
        alert("Usted ha obtenido un descuento de: "+ bono);

    }

      
}
     
    
    



