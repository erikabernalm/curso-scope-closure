// Creando la lógica de la alcancía

// Sintaxis normal sin el contexto de lo que es una closure

// function moneyBox(coins) {
// 	let saveCoins = 0;
// 	saveCoins += coins; // incremento
// 	console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

/* 
Selecciono, ejecuto y vemos:
MoneyBox: $5
MoneyBox: $5

Esto sucede: 
saveCoins = saveCoins + coins
    0     =    0      +   5
		5

La lógica que estamos ejecutando NO está recordando. La variable saveCoins se inicializa en 0, cuando se ejecuta la primera vez le pasa el valor 5 y me muestra esos 5. Lo vuelvo a ejecutar, vuelve a llamarla pero el valor de saveCoins sigue siendo 0, le pasé los 5 en adición, muestro y sigo teniendo 5. NO está ahorrando.

Vamos a arreglar este problema haciendo una closure que va a permitir acceder al ámbito léxico de una variable, recordar lo que tiene en las ejecuciones y con esto ahorrar verdaderamente con JS. 
*/

// Usando una closure
/*
Hay que hacer una variable para guardar o inicializar el valor en 0 porque cada vez que se abra una cuenta o tengamos una alcancía va a venir sin dinero.

Ahora hacemos una closure creando una nueva función a la cual le pasamos como argumento las coins (monedas) y dentro hacemos la lógica y luego retornamos esta lógica para poderla implementar y luego ver si funciona.

Con esto saveCoins += coins  reasigno el valor de la variable saveCoins con adición. Con el console.log() quiero mostrar cuanto tengo. AQUÍ está lo del ámbito léxico, estoy accediendo dentro de la otra función sobre la variable asignada dentro de la función principal moneyBox() ....y una vez tengo esto, voy a retornar countCoins para poderlo utilizar....y AQUÍ cuando yo ya la instancie voy a poderle pasar ese argumento y en ese argumento pasarle lo que quiero ahorrar. AHÍ va a recordarse ese contexto y voy a poder ahorrar.  
*/

function moneyBox() {
	let saveCoins = 0; // Function Scope
	function countCoins(coins) { // inner function, a closure
		saveCoins += coins;
		console.log(`MoneyBox: $${saveCoins}`);
	}
	return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

/* 
Selecciono, ejecuto y vemos:
MoneyBox: $5
MoneyBox: $10
MoneyBox: $25 // tercera iteración

Esto sucede: 
saveCoins  =  saveCoins   +     coins
    0      =    0         +       5
		5      =    5         +       5
		10     =    10        +       15
		25
 contador   lo que recuerda    valor que entra

 Tengo $25 ahorrados. Aquí ya tenemos la lógica de un banco usando pocas líneas de código.
*/

// Pero ¿Qué pasa si ya quiero ofrecer el servicio y decirle a varias personas que vengan a ahorrar conmigo? 
// Para eso creamos de nuevo una constante que va a ser una instancia de moneyBox(); 

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

/* 
Selecciono, ejecuto y vemos:
MoneyBox: $5
MoneyBox: $10
MoneyBox: $25 // mi ahorro
MoneyBox: $10
MoneyBox: $30
MoneyBox: $35 // ahorro de Ana

Caso práctico de una closure. Vemos como crear una función dentro de la función para volverla una closure, como acceder a la variable con el concepto de ámbito léxico, y como se va haciendo adición para poder mostrar que la alcancía funciona bien. Así se recuerda el contexto para hacer uso de lo que necesitemos después.
*/