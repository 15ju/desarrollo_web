

//Una function encapsula un pequeño bloque de codigo

//Definimos la funcion hola mundo
function holaMundo() {
    console.log("Hola Mundo!")
};
function sumar(a, b) {
    console.log(a + b)
}

//o si no se hace asi

function sumar(a, b) {
    var resultado = a + b;
    return resultado
}

//invocar la funcion

holaMundo();
