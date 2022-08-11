// Hoisting o elevación con var

// console.log(nameOfDog);
// var nameOfDog = 'Elmo';

/* 
Situación: tenemos primero el llamado y luego la asignación de la variable. 

Al ejecutar vemos que el valor es undefined

¿Qué está pasando?
Lo que pasa es que cuando tenemos este recurso, la asignación se está haciendo después del llamado. Entonces lo que hace este hoisting o elevación es asignar la variable así:

var nameOfDog; // undefined 
console.log(nameOfDog); // mostrar
var nameOfDog = 'Elmo';

Esto sucede en la elevación: esta variable nameOfDog la acomoda en la parte superior en ese tiempo de compilación y cuando se hace el llamado el valor que tiene asignado es undefined. Por lo tanto, al continuar el programa ya NO tenemos acceso a esa información que debió ser mostrada.
*/

// Y ¿Qué pasa si hago esto?
// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

/* 
Tenemos:
undefined
Elmo

Esto es lo que hace JS:

var nameOfDog; // se inicializa con valor de undefined...ocurre el hoisting o elevación
console.log(nameOfDog); // mostrar
var nameOfDog = 'Elmo'; 
console.log(nameOfDog); // mostrar
*/


// Hoisting o elevación con Function

// nameOfDog();

// function nameOfDog() {
// 	console.log(`El mejor perrito es ${elmo}`); // mostrar
// }

// var elmo = 'Elmito';  o solo  var elmo; 

/* 
Selecciono, ejecuto y vemos:
El mejor perrito es undefined

¿Qué está pasando?

Esto es lo que hace JS:

var elmo; // undefined // hoisting o elevación
function nameOfDog() { // la función también se eleva
	console.log(`El mejor perrito es ${elmo}`); // mostrar
}
nameOfDog(); // llamado

Esto ocurre en tiempo de compilación. Las funciones también se elevan.
*/

// Y ¿Qué pasa si hago esto?

nameOfDog();

function nameOfDog() {
	console.log(`El mejor perrito es ${elmo}`);
}

/* 
Vemos ReferenceError: elmo is not defined

elmo NO existe, NO se quien es, NO se donde está, ni siquiera en el bloque, ni siquiera en la función, NO lo encuentro de forma global. Hay que tener cuidado para NO caer en estos detalles.
Aquí es donde el hoisting nos ayuda a que estos problemas NO sucedan.
*/