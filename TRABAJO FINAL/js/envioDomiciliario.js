function encargar(){
    alert('Se ha guardado los productos encargados. Aproximadamente le llegara a su hogar una semana')
}

let usuario=document.getElementById('nombre');
usuario.addEventListener('keydown',function(e){
    console.log("Estas presionando la tecla", e.key)
})


let correo=document.querySelector('form')
correo.addEventListener('submit',function(e){
    e.preventDefault();
let mail=document.getElementById('email').value;
console.log('Correo:'+mail)
})

let contraseña=document.querySelector('form')
contraseña.addEventListener('submit',function(e){
    e.preventDefault();
let mostrarContraseña=document.getElementById('Password').value;
console.log('Contraseña:'+ mostrarContraseña)
})
let direccion=document.querySelector('form')
direccion.addEventListener('submit',function(e){
    e.preventDefault;
let mostrarDireccion=document.getElementById('Dirreccion').value;
console.log('Direccion:'+mostrarDireccion)
})


