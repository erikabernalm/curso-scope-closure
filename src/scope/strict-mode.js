pi = 3.1416; // la variable NO está declarada sino simplemente asignada
console.log(pi); // mostrar

/* 
Selecciono, ejecuto y tengo 3.1416 ...solo hemos asignado el valor sin pasar por la declaración.

Esto tiene que ver con el concepto de hoisting y la elevación de las variables. 

Lo que el programa o la lógica dentro de JS hizo fue:

encontró a pi = 3.1416; y dijo:
var pi; // y se asignó undefined
pi = 3.1416; // luego se reasignó el valor 
console.log(pi); // y se mostró

Esto es lo que pudo interpretar JS

Pero ¿Qué pasa si ahora yo le digo "No entres en ese juego" y usemos el modo avanzado dentro de JavaScript?
*/

'use strict';
pi = 3.1416;
console.log(pi); // Ejecuto este código y NO nos deja mostrar el valor de pi...dice ReferenceError: pi is not defined

/* 
Esto significa que aquí ya NO vamos a estar haciendo uso del hoisting que es la elevación de las variables en tiempo de compilación, etc.

Hay que asignar y declarar al mismo tiempo o declararla y luego reasignarla para poderla usar...y aquí es donde entra el concepto del Strict Mode 'use strict'...esto es para mostrarlo en lo que vendría siendo una variable.
*/

// También podemos hacer este uso dentro de una función

function myFunction() {
	'use strict';
	return pi = 3.1416;
}

console.log(myFunction());

/* 
Ejecuto la función y de nuevo dice ReferenceError: pi is not defined

Hay que tener cuidado al hacer esto porque si NO se usa el 'use strict' ahí si muestra el valor 3.1416 ...y estemos haciendo lógicas que puedan llevar a flujos extraños en la aplicación. Por lo tanto activar esta opción 'use strict' ya va a hacer que cumplamos con el objetivo clave y que también estemos listos para que en el futuro cada actualización estemos pensando en que el código va a tener este concepto de seguridad y que va a estar mejor pensado a la hora de escribir nuestro software. 
*/