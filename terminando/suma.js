

document.getElementById("sumar").addEventListener('click', function() {
    let numeroA = document.getElementById("numero1").value;
    let numeroB = document.getElementById("numero2").value;
    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    console.log("el resultado de la suma es " + resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("contenedor_resultado").style.display = 'block';
});


function sumar(a, b) {
    return a + b
}   

