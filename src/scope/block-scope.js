/*
En ECMAScript 6 se introdujeron estas nuevas palabras reservadas let y const con las cuales se introdujo el concepto de Block Scope

El alcance de bloque significa que las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de este bloque. Así que con ello vamos a poder utilizar let y const para este concepto en particular Block Scope...y var para cuando queramos acceder durante todos los elementos o contextos que necesitemos como en global. 

Aunque hay que tener mucho cuidado a la hora de asignar variables globales porque podemos volverlas a reasignar y cometer errores.

Es mejor dejar de utilizar var y pasar a utilizar let y const
*/
// Lo primero es definir un bloque, es decir cualquier cosa que esté dentro de llaves {}
// Tenemos las 3 variables declaradas dentro de las llaves del if...¿Qué pasa si yo quisiera fuera de ese bloque acceder a estas variables? ...por lo tanto coloco los console.log() 
// ¿Qué va a pasar con el llamado a estas variables?

// function fruits() {
// 	if (true) {
// 		var fruit1 = 'Apple'; // function o local scope
// 		let fruit2 = 'Kiwi'; // block scope
// 		const fruit3 = 'Banana'; // block scope
// 	}
// 	console.log(fruit1);
// 	console.log(fruit2);
// 	console.log(fruit3);
// }

// fruits();

/*
Seleccionamos, le damos Run Code y tenemos Apple, o sea la podemos acceder. Pero ya NO pude acceder al segundo elemento y me dice ReferenceError: fruit2 is not defined...pero ya NO me muestra más porque hasta ahí se acabó, o sea hasta ahí llegó, al primer error se apagó el programa. Y hay que tener mucho cuidado porque NO queremos que eso nos pase.

¿Qué está pasando?

let y const tienen alcance de bloque (block scope) y var tiene alcance local o de función (function/local scope)

Puedo acceder a la variable var independientemente que esté dentro de un bloque. Por eso hay que tener mucho cuidado con estos elementos...porque yo solo quiero utilizar fruit2 y fruit3 dentro de este bloque...las llaves del if...y NO quiero afectar la lógica porque es muy probable que más adelante tenga que hacer alguna lógica con un nombre similar o una variable que puede que no me de cuenta y le ponga el mismo nombre y pueda romper el programa.
*/

// Y ¿Qué pasa si hago esto?

function fruits() {
	if (true) {
		var fruit1 = 'Apple'; // function o local scope
		let fruit2 = 'Kiwi'; // block scope
		const fruit3 = 'Banana'; // block scope
		console.log(fruit2);
		console.log(fruit3);
	}
	console.log(fruit1);
}

fruits();

/*
Selecciono, ejecuto y vemos que tenemos: 
Kiwi
Banana
Apple

¿Por qué en ese orden?

Tenemos la función, se ejecuta, tenemos la validación que es un bloque, tenemos las 3 variables, y luego llamamos a fruit2 y a fruit3 que dentro del bloque SÍ puedo acceder a ellas...así que claramente se van a mostrar, y luego fuera de ese bloque accedo a var...porque me lo está permitiendo pero esto tiene que ver por el nombre de la palabra reservada que estoy usando var

Si yo cambiara var por let ya NO podría acceder a este elemento fuera del bloque {} 
*/

// Por otro lado, ¿Qué pasa si hago esto?

// function fruits() {
// 	let fruit2 = 'Kiwi'; // block scope
// 	if (true) {
// 		var fruit1 = 'Apple'; // function o local scope
// 		const fruit3 = 'Banana'; // block scope
// 		console.log(fruit2);
// 	}
// 	console.log(fruit1);
// 	console.log(fruit3);
// }

// fruits();

/*
La variable let se mostró porque tiene el alcance solo dentro de la función (Function Scope) y puede ser transmitida dentro de la lógica anidada como en las llaves del if...es transmitida de para abajo. Para ADENTRO SÍ se puede, por eso es invocada dentro del bloque del if

El elemento const fruit3 NO se mostró porque tiene block scope y NO se puede acceder fuera de ese bloque. Para AFUERA NO se puede...saltaría del bloque, además NO puede saltarse el scope..y esto NO se puede.
*/

// Y ¿Qué pasa si hago esto?

// function fruits() {
// 	const fruit3 = 'Banana'; // block scope
// 	if (true) {
// 		var fruit1 = 'Apple'; // function o local scope
// 		let fruit2 = 'Kiwi'; // block scope
// 		console.log(fruit3);
// 	}
// 	console.log(fruit1);
// 	console.log(fruit2);
// }

// fruits();

/* 
Tenemos Banana y Apple y luego sale ReferenceError: fruit2 is not defined

Para ADENTRO SÍ puede pero para AFUERA NO
*/