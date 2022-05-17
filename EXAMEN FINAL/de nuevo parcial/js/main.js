let arrgloEstudiante=[];
let arregloNotas=[];

function botestudiante(){
    let estudiante=document.getElementById('estudiante').value;
    alert(`El nombre del estudiante es ${estudiante}`);
    arrgloEstudiante.push(estudiante);
}

function Bnota(){
    let nota=document.getElementById('nota').value;
    nota=parseInt(nota);
    alert(`Su nota es ${nota}`)
    arregloNotas.push(nota)
}

//promedio//
function bopromedio(){
    let promedio=0;
    let suma=0;

    for(let i of arregloNotas){
        suma=suma+i
        promedio=suma/arregloNotas.length;
    }
  alert('El promedio por la notas anteriormente ingresadas es '+' '+promedio)
}

//nota mayor con su respetivo estudiante

function notaMayor(){
    let notaMayor=0;
    let estudiante=[]

    for(let i in arregloNotas){
        if(arregloNotas[i]>notaMayor){
            notaMayor=arregloNotas[i]
        }
    }
    
for(let i in arrgloEstudiante){
    if(arregloNotas[i]==notaMayor){
        estudiante.push(arrgloEstudiante[i]);

    }

    
   
}
alert(`${notaMayor}, es la nota mayor obtenida por el estudiante ${estudiante}`)
}
