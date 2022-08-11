/*
Todas y cada una de las funciones que hagamos dentro de la lógica van a tener su propio alcance, y las variables declaradas dentro de esta función van a ser accesibles solamente dentro de esta función y en cualquiera de sus funciones anidadas...esto tiene que ver con el ámbito léxico.

Estas variables que asignemos acá van a tener que ser solamente dentro de este bloque.
*/


function greeting() {
	let userName = 'Ana';
	console.log(userName);

	if (userName === 'Ana') {
		console.log(`Hello ${userName}!`)
	}
}

greeting();

/* 
La función declara una variable y la asigna...el valor string de 'Ana', la mostramos con el console.log()...hacemos en este caso una validación...un if de userName...si sea igual en valor ('Ana') y tipo (string)...y luego saludamos.

Ejecutamos la función para que nos muestre esta lógica. Tenemos Ana y Hello Ana!

Esto significa que esa variable SÍ pudo ser accedida dentro de la misma función y de algún bloque o de alguna función anidada dentro de esta función. 
*/
// Y ¿Qué pasa si trato de llamar la variable userName fuera del llamado?

console.log(userName); // Sale ReferenceError: userName is not defined

/* 
Significa que la variable userName no ha sido definida entonces NO puedo acceder a la misma. 

NO podemos acceder a esta variable porque esta tiene el alcance local, es decir el alcance solamente dentro de la función y puede ser transmitida dentro de la lógica anidada como en este caso el if y ser usada dentro de la validación. Pero si yo quisiera accederla por fuera NO es posible. Este concepto se le llama Function Scope o Local Scope. 

Local puede acceder a local y a global.
Global puede acceder a global pero NO a local.
*/
// ¿Qué se hizo en la lógica?

/*
En la línea 2 asignamos y declaramos la variable, después la invocamos con el console.log(), hicimos una validación, volvímos a invocarla con el console.log(), ejecutamos la lógica...en este caso la función greeting(), y cuando quisimos acceder a la variable con el console.log() por fuera de la función NO fue posible porque NO hay una referencia, NO está asignada como global. 

Si yo la asignara como global ahí sí podría accederla.

El alcance que tiene la variable asignada en la línea 2 solo es dentro de la función, o sea Local Scope.
*/