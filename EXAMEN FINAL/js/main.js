
let arregloEstu=[];
let arregloNotas=[];


function boton(){
 let nombre=document.getElementById('texto').value;
    alert('El estudiante es:'+nombre);
    arregloEstu.push(nombre);

  
  


};

function botonD(){
    let notas=document.getElementById('numero').value;
    notas=parseInt(notas);
    arregloNotas.push(notas);
 

   
}
//promedio
function botonR(){
 let promedio=0;
 let total=0;

 for(let i of arregloNotas){
     total=total+i;

     
 }
 promedio=total/arregloNotas.length;

 alert('El promedio total es:'+promedio);

   
    
  
}
// ----------------------------------------------------------------------------------------------------
//nota mayor del estudiante
function total(){
let notaMayor=0;
let estudents=[];
  
  for(let i in arregloNotas){

        if(arregloNotas[i]>notaMayor){
            notaMayor=arregloNotas[i];

        }

   }
   for(let i in arregloEstu){
       if(arregloNotas[i]==notaMayor){
           estudents.push(arregloEstu[i]);
       }

   }
   console.log(notaMayor);
   alert(`la nota mayor fue de: ${notaMayor}, del estudiante ${estudents}`);
  }







