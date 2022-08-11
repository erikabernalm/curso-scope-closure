// variables

var a; // declarando
var b = 'b'; // declarando y asignando al mismo tiempo
b = 'bb'; // reasignando el valor que se tiene (reasignación)
var a = 'aa'; // redeclarando la variable a (redeclaración)


// Global Scope

// Cualquier variable que se encuentre en el documento (como las anteriores variables que tenemos en las primeras líneas de nuestro aplicativo) pasan a ser variables globales y se instancian dentro del objeto window, así que vamos a poder acceder donde queramos a estas variables.
// El siguiente es un ejemplo para ver cómo instanciamos, generamos variables y las leemos dentro de bloques de código. 
// La variable fruit está asignada en global scope 
// Las variables asignadas en la parte superior del documento o dentro del documento (sin estar dentro de un bloque, dentro de una función, etc.) pasan a ser variables globales.

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
	console.log(fruit);
}

bestFruit();


/* Otra de las formas en la que podemos crear una variable global es cuando no tenemos cuidado a la hora de DECLARAR porque cuando NO DECLARAMOS la variable y simplemente la ASIGNAMOS, por defecto va a pasar a ser una variable GLOBAL.

Debemos evitar crear una variable GLOBAL por accidente porque si no nos damos cuenta estamos creando una variable GLOBAL.

En el siguiente ejemplo estamos asignando a country dentro de una función y NO fuera, o sea por defecto esto  country = 'Colombia' es una variable GLOBAL y puede ser accedido fuera de la función. 

Si yo le pusiera var, let o const a country en ese espacio dentro de la función, y lo asignara y declarara, NO podría acceder a ello desde fuera de la función. 

Global puede acceder a global pero NO a local.
*/

function countries() {
	country = 'Colombia'; // global 
	console.log(country)
}

countries();
console.log(country);
