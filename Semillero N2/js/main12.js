 var contador=1;
 var ejecutar= setInterval(imprimir,2000);

function imprimir(){
    document.write("practicando"+contador+"<br/>")
    contador++;
    if(contador==6){
       clearInterval(ejecutar);
    }
}

  