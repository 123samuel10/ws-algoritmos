function mostrarAlerta(){
    window.alert("esta es la alerta")
}
function ingresarDatos(){
    let nombre= window.prompt("ingresa tu nombre:"," ");
    window.alert("su nombre es: "+nombre)
}
function confirmar(){
    let respuesta= window.confirm("usted esta de acuerdo?");
    if(respuesta=true){
window.alert("usted esta de acuerdo");
    }else{
        window.alert("usted no esta de acuerdo")
    }
}