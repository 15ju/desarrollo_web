/**
 * Cada lenguaje usa un lenguaje diferente para mover datos, 
 * Javascript usa JSON para transportarlos
 * 
 * JSON: javascript object notation
 * 
 * Cuando se programa, se crea la hoja .json,
 * cada vez que programo elijo la forma de almacenar datos que yo necesito, 
 * cada propiedad tiene su valor, yo voy a definir el JSON 
 * dependiendo de la estructura de datos que necesite.
 * 
 * Se define la variable y se le dan los atributos, ejemplo Alex, le asigno un nombre, un apellido y dos autos:
 * 
 * var alex = { 
 * nombre: "Alex",
 * apellido: "Otero",
 * automoviles: ["onix",
 * "Clio"],
 * Residencia: {
 *  ciudad: "CABA",
 *  provincia: "Bs. As."
 * }
 * }
 * 
 * Como se ve, puede haber un array(como en automoviles) y otro elemento definido como la variable usando {} cuando 
 * tiene mas respuestas adentro.
 * 
 * const persona = {"nombre": "Alex", "apellido": "Otero", "edad": 30 }
 * para usar el JSON, desde javascript se una un const obj = JSON.parse(persona)
 * para agarrar ese objeto y transformarlo en variables que contengan los datos.
 * Ahi empieza a vincular y empieza a usar eso.
 * 
 * a partir de que lo define empieza a acceder a los atributos con el obj.
 * Ejemplo: obj.nombre...
 *  (document.getElementById("demo").innerHTML =
 * "nombre: " obj.nombre)
 * Suponiendo que esta en el javascript o dentro del script en html.
 * 
 * Habla un poco de como funciona las API y da un ejemplo de como usarla.
 * 
 * 
 * 
 * en html puedo poner dentro del script 
 * fetch:"link de la url de la que voy a extraer los datos"
 * .then(response => response.json())
 * .then(json => console.log("json"))
 * 
 * aca abajo iria la construccion de todos los datos que recopila y los va a guardar 
 * 
 * 
 * Local storage y pwa:
 * Local storage nos permite almacenar informacion adentro del navegador y los datos no se borran a pesar de que el navegador se cierre,
 *  solo se cierran cuando el usuario elimina los datos almacenados
 * 
 * En la consola esta la solapa application (revisar esa para ver que es todo lo que tiene, es muy util para hacer aplicacion de lo que tiene), 
 * el apartado storage, local storage que dice que es lo que esta guardando el navegador
 * 
 * Cuando creo una aplicacion en la que el usuario ingresa, no quiero pedirle al mismo su nombre y clave,
 * eso se almacena en local storage y lo va usando de ahi.
 * Pretende que seamos capaces de pensar como almacenar informacion de la navegacion y no tener que acudir todo
 * el tiempo a la base de datos.
 * 
 * 
 * API de geolocalizacion: permite, con JS acceder a las coordenadas de ubicacion del usuario, siempre que consienta el mismo.
 * Esto es para geolocalizar el contenido de lo que estoy desarrollando.
 * 
 * 
 * 
 * PWA: aplicaciones web progresivas: utilizar APIs del navegador para que a pesar de ser una web en un navegador, parezca que estamos utilizando una aplicacion.
 * 
 */