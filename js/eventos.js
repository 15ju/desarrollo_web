/**
 * variante con el evento click
 */
/**
document.addEventListener('click', function (){
    console.log("hola mundo desde eventListener");
    document.getElementById("demo").innerHTML = "El primer evento que se programa"
});
*/
/**
 * en w3schools hay una lista de los eventos que puedo usar en js
 */

document.getElementById("boton").addEventListener('click', function() {
    console.log("Hola, ya se programo el primer evento del html")
    document.getElementById("demo").innerHTML =  "Probando el evento desde el boton solamente"
}
)

document.getElementById("boton_color").addEventListener('click', function() {
    document.body.style.backgroundColor = "rgb(255, 0, 0)"
})

document.getElementById("boton_default").addEventListener('click', function(){
    document.body.style.backgroundColor = "lightblue"
})

document.getElementById("boton_borra").addEventListener('click', function (){
    document.getElementById("demo").style.display = "none"
})

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "yellow"
}