// la funcion del metodo getElementsByTagName es cambiar todos los nombres del html
//o tambien si queremos cambiar uno solo lo podemos hacer.



let parrafos=document.getElementsByTagName("p");
for(let i=0; i<parrafos.length; i++){
parrafos[i].innerHTML="HOLA somos todos uno solo"
}