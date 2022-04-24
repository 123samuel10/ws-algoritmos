let padre=document.getElementById("padre");
let resultado=document.getElementById("resultado");

// resultado.innerText=abuelo.innerText;
let abuelo=padre.parentNode;
resultado.innerText=abuelo.id;