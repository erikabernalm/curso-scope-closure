// Ejemplo con var

var firstName; // declaración...se le asigna un valor de undefined
firstName = 'Erika'; // asignación
console.log(firstName); // mostrar

// ¿Qué pasa si quiero reasignar un valor?

var lastName = 'Bernal'; // declaración y asignación
lastName = 'Barbosa'; // reasignación
console.log(lastName); // mostrar

// Pero ¿Qué pasa con la reasignación?

var secondName = 'Nathaly'; // declaración y asignación 
var secondName = 'Ana'; // redeclaración y reasignación
console.log(secondName); // mostrar

// Ejemplo con let 

let fruit = 'Apple'; // declaración / asignación 
fruit = 'Kiwi'; // reasignación
console.log(fruit); // mostrar
/* 
Pero ¿Qué pasa si yo quisiera volver a declarar esta variable?

El editor de código me dice: No se puede volver a declarar la variable con ámbito de bloque 'fruit'.

NO se puede redeclarar esta variable dentro del block-scope

Con let NO se puede redeclarar. SÍ se puede reasignar, o sea le puedo cambiar el valor.
*/

// Ejemplo con const

const animal = 'dog'; // declaración / asignación 
console.log(animal); // mostrar
/*
NO se puede volver a declarar la variable con ámbito de bloque 'animal'.

Con const NO se puede redeclarar ni reasignar.
*/

/*
Hay que tener claro algo y es que const NO es una forma infalible de manejar la inmutabilidad. A pesar de que se mencione que una constante NO puede ser redeclarada ni reasignada, cuando trabajamos con arreglos y objetos estamos agregando valores a la referencia.  
*/

// Ejemplo de esto con const

const vehicles = [];

/* ¿Qué pasa si quiero hacer uso de los métodos disponibles para arreglos para agregar o quitar elementos a un Array?

Tenemos la variable que está asignada en un valor nada, en este caso a un Array vacío, pero le quiero hacer .push

¿Qué pasa si le hago .push?
*/

vehicles.push("🚗");
console.log(vehicles);

/* 
Selecciono, ejecuto y ahí veo el Array con el emoji del carro. Esto es porque está haciendo referencia, apunta a la referencia de esta constante vehicles o el valor del Array []...va a trabajar sobre ese arreglo.

Pero ¿Qué pasa si quitamos el emoji del carro?
*/

vehicles.pop();
console.log(vehicles);

/*
Selecciono, ejecuto y veo el Array con el carro y luego "adiós" a lo que esté ahí o al último elemento y ahora solo tenemos el Array vacío de nuevo.

¿Qué está pasando acá?

NO estamos reasignando ni redeclarando. Ya la referencia existe  const vehicles = []  hacia el valor que en este caso es un arreglo y sobre el arreglo puedo utilizar métodos que en este caso son .push() y .pop() ...por eso hay que tener cuidado con los conceptos de inmutabilidad para NO pensar que const ya no nos va a permitir hacer nada de nada, sino que según el uso de lo que tenga podemos trabajar.
*/