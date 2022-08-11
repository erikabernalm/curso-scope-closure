function greeting() {
	let userName = 'Erika'; // variable de alcance de función

	function displayUserName() { // función interna...closure
		return `Hello ${userName}`; // va a retornar el mostrar el userName
	}
	return displayUserName;
}

/* 
Asignamos y declaramos una variable y luego estamos accediendo a lo que tiene esa variable para al final retornar displayUserName

También se habla de que recuerda el contexto o accede al contexto.

¿Cómo ejecutamos esta closure y cómo le sacamos ventaja?
*/

const g = greeting(); // ahora podemos utilizar a g como el elemento
console.log(g); // mostrar
console.log(g()); // ejecutar...llamar a g()

/*
Seleccionar, ejecutar y vemos que nos dice que tenemos una Función llamada displayUserName y luego tenemos a Hello Erika

En este llamado console.log(g) estamos retornando la función, o sea la definición que tiene en este caso displayUserName y cuando la ejecutamos console.log(g()) nos está entregando el valor Hello Erika  con lo cual está accediendo a este ámbito léxico pero también está recordando el contexto.   
*/

/* 
En JS una función también puede tener otra función. A esto se le llama una función anidada. Estamos agregando una función lógica, la retornamos y podemos acceder a ello.

En JS las closures proporcionan acceso al ámbito léxico a nivel de como asignamos las variables y cómo estas son accesibles a nivel de los niveles que tenemos.
*/