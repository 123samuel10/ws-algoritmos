
function boton(){
    document.getElementById('boton-comprar');

    let huevos=document.getElementById('huevos-boton').value;
    let leche=document.getElementById('leche-boton').value;
    let pan=document.getElementById('pan-boton').value;
    let fruta=document.getElementById('fruta-boton').value;
    
    
    
    if (huevos<=30){
        huevos*=15000;
    }
    if (leche<=20){
        leche*=3500;
    }
    if(pan<=50){
    pan*=2000;
    }
    if(fruta<=50){
        fruta*=2000;
    }
    
    let resultado=huevos+leche+pan+fruta;
    alert(resultado)

    if(resultado>=50000){
      bono()
      desceunto=resultado-bono;
    alert('hola, cliente el desceunto de su compra es de:'+bono +"\n" +
          "El total de su compra es de: " +desceunto);
    
    }else{
        alert('El valor de la compra es: '+ resultado);
    }
    
}

function bono(){
    bono=Math.round(Math.random()*60000);

}


function Ccarrito(){
    window.location.reload();
}






