//este metodo consiste en desaparecer hola programadores al cabo de unos 3 segundos

const conteo= function(milisegundos) {
    setTimeout(function() {
        console.log("hola programadores");
    }, milisegundos);
};
conteo(3000);
conteo(5000);