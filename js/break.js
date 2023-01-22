

//sirve para cuando quiero darle la orden de que ante un determinado valor de la variable la ejecucion se detenga.
//si lo uso dentro de un ciclo for, le estoy diciendo "termina con la ejecucion de este ciclo for"

for (x; x > 0; x--) {
    if (x == 5){
        break  //aca le da la orden de que termine de ejecutarse si es 5
    }
    console.log("El valor de x es: " + x) //sentencia
}