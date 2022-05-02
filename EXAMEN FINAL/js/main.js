function boton(){
 let nombre=document.getElementById('texto').value;
    console.log(nombre);
};

function botonD(){
    let notas=document.getElementById('numero').value;
    console.log(notas);

    
}

function botonR(){
    let resultado=document.getElementById('boton-result').value;
    let nombre=document.getElementById('texto').value;
    let notas=document.getElementById('numero').value;

    console.log( 'La nota de '+' '+nombre+' '+'es:' +' '+ notas);
 
  
}
function total(){
    let resultado=document.getElementById('boton-result').value;
    let nombre=document.getElementById('texto').value;
    let notas=document.getElementById('numero').value;
    alert('los estudiantes '+nombre+'tienen una nota de: '+ notas);
    
}
