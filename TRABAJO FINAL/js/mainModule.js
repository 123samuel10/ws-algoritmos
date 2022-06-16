// import { Nombre } from "./main.js";
// console.log(Nombre)
//funciones donde te muestran los productos mas caros y los mas baratos
export function totalizarCompra(valores){ 
    let suma=0;
    console.log(valores);
    valores.forEach(element => {
        suma+=element
       
    });
    console.log(suma);
    return `Señor cliente el total de los productos es ${suma}`
    
}