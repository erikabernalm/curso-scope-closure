const myGlobal = 0; // variable global

function myFunction() {
	const myNumber = 1;
	console.log(myGlobal);

	function parent() { // función interna ...aquí ya tenemos un closure
		const inner = 2;
		console.log(myNumber, myGlobal);

		function child() {
			console.log(inner, myNumber, myGlobal);
		}
		return child();
	}
	return parent();
}

myFunction();

/*
Una closure es una técnica que permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras o cierres se crean cada vez que una función es creada. 

A diferencia de otros conceptos como funciones, variables u otros, los closures no son siempre utilizados.

Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto y la recuerda.

JS implementa el concepto de ámbito léxico que es la accesibilidad de las variables anidadas dentro de funciones y como puedo con ellas llamarlas.

A partir de function parent() empezamos a hacer la función anidada. Creamos una función dentro de otra función y la llamamos parent() ...parent() es una función interna y AQUÍ es donde ya estamos creando un closure. Vamos a ir viendo cómo se transmite el ámbito léxico para poder acceder a las variables. Dentro de la function parent() asignamos otra función llamada child() y dentro de este hijo lo que queremos es acceder a todas las variables. Una vez que definimos una función y dentro otra función ya tenemos un closure. Esta es la lógica a nivel de la sintaxis.

Hay que entender del ámbito léxico es cómo puedo acceder a las variables dentro de estos elementos anidados o los ámbitos que van a estar anidados en este caso en parent() y en child()
El ámbito léxico significa que la accesibilidad de las variables está determinada por la posición de las mismas dentro de los ámbitos anidados que son las funciones dentro de otras funciones.

El return mata la función cuando retorna.

Al final ejecuto la función myFunction() para ver cómo las variables van a ser accedidas y transmitidas dentro de cada uno de los ámbitos de las funciones.  
*/