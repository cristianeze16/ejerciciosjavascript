//*!Ejercitación:
//* 1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.
//* 2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
//* 3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.
//* 4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.
//* 5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
//* 6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.
//* 7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.
//* 8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
//* 9.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
//* 10.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
//* 11.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
//* 12.	Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
//* 13.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

//* 1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

// let numeroA = 10;
// let numeroB = 5;

// if (numeroA > numeroB) {
//   console.log("el numero A es mayor");
// } else {
//   console.log("el numero B es mayor");

// }

//* 2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

// numeroA = 10;
// numeroB = 10;

// if (numeroA == numeroB) {
//   console.log("Los numeros son iguales");
// }else if (numeroA != numeroB) {
//   console.log("Los numeros son distintos");
// }

//* 3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

// let numeroA = 1;
// let numeroB = 1;

// if (numeroA > numeroB) {
//   console.log("el numero A es mayor");
// } else if (numeroA < numeroB) {
//   console.log("el numero B es mayor");
// } else if (numeroA == numeroB) {
//   console.log("ambos numeros son iguales");
// }

//* 4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

// let numeroA = 1;
// let numeroB = 2;
// let numeroC = 0;

// if (numeroA < numeroB && numeroA < numeroC) {
//   console.log("numero A es el menor");
// } else if (numeroB < numeroA && numeroB < numeroC) {
//   console.log("numero B es el menor");
// } else if (numeroC < numeroA && numeroC < numeroB) {
//   console.log("numero C es el menor");
// }

//* 5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

// let persona1 = {
//   nombre: "Marcos",
//   edad: 21,
//   altura: 185,
// };

// let persona2 = {
//   nombre: "Abel",
//   edad: 30,
//   altura: 170,
// };

// if (persona1.altura > persona2.altura) {
//   console.log(persona1.nombre + " " + "es mas alt@");

// }else if(persona2.altura >persona1.altura) {
//   console.log(persona2.nombre + " " + "es mas alt@");
// }

// if(persona1.edad >persona2.edad) {
//   console.log(persona1.nombre + " " + "es mayor que"+ " "+ persona2.nombre);
// }else if(persona2.edad >persona1.edad) {
//   console.log(persona2.nombre + " " + "es mayor que"+ " "+ persona1.nombre);
// }

//* 6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

// let nombre = prompt("Ingrese su nombre: ");
// let edad = Number(prompt("Ingrese su edad: "));
// let altura = Number(prompt("Ingrese su altura: "));
// let vision = Number(prompt("Ingrese su vision del 1 a 10: "));
// edadOk = false;
// alturaOk = false;
// visionOk = false;

// if (edad >= 18) {
//   console.log(nombre+" "+"usted cumple con la edad");
//   edadOk = true;
// } else {
//   console.log(nombre+" "+"usted no cumple con la edad minima");
//   edad = false;
// }

// if (altura > 150) {
//   console.log(nombre+" "+"usted cumple con la altura");
//   alturaOk = true;
// } else {
//   console.log("usted no cumple con la altura");
//   alturaOk = false;
// }

// if (vision >= 8) {
//   console.log(nombre+" "+"usted cumple con la vista requerida");
//   visionOk = true;
// } else {
//   console.log(nombre+" "+"usted no cumple con la vista requerida");
//   visionOk = false;
// }

// if (edadOk && alturaOk && visionOk) {
//   console.log(nombre+" "+"usted cumple con los requisitos para conducir");
// } else {
//   console.log(nombre+" "+"usted no cumple con los requisitos para conducir");
// }

//* 7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

// let nombre = prompt("Ingrese su nombre");
// let pase = prompt("¿Tiene pase vip? s/n" );
// let entrada = prompt("¿Posee entrada? s/n");
// let miNombre = "cristian";
// let dineroDisponible;
// ingresoLibre= false;
// respuestaInvalida = false;
// consultaComprar = false;

// if (nombre.toLowerCase() === miNombre.toLowerCase()) {
//   ingresoLibre = true;
// }else{
// consultaComprar=true;
// }

// if(pase.toLowerCase() == "s") {
//   ingresoLibre = true;
// }else if(pase.toLowerCase() == "n"){
//   ingresoLibre = false;
//   consultaComprar = true;
// }else if(pase.toLowerCase() != "s" || pase.toLowerCase() != "n" || entrada.toLowerCase() != "s" || entrada.toLowerCase() != "n"){
//   respuestaInvalida = true;
// }

// if(entrada.toLowerCase()=="s"){
//   usarEntrada =prompt("¿Desea ultilizarla? s/n")
//   if(usarEntrada.toLowerCase()=="s"){
//     console.log("bienvenido");
//   }else{
//     consultaComprar=true;
//   }
// }

// if(ingresoLibre){
//   console.log("bienvenido");

// }

// if(consultaComprar){
//   dineroDisponible=prompt("Ingrese su dinero");
// }
// if(dineroDisponible >= 1000){
//   console.log("Entrada vendida Bienvenido")

// }else{
//   console.log("no dispone de dinero");
// }

//* 8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
let limiteAlto = 10;
let limiteBajo = 1;
let limiteIntentos = 3;
let intentos = 1;
let numeroIngresado = prompt("ingrese un numero del 1 al 10");
let numeroIncognita = Math.floor(
  Math.random() * (limiteAlto - limiteBajo) + limiteBajo
);
console.log(numeroIncognita);

if (numeroIngresado != numeroIncognita) {
  console.log("Intente nuevamente");
  intentos++;

}
if (numeroIngresado > numeroIncognita) {
  console.log("el numero es menor");
} else if (numeroIngresado < numeroIncognita) {
  console.log("el numero es mayor ");
}
if (numeroIngresado === numeroIncognita) {
  console.log("Ganaste, haz adivinado el numero");
}
if (intentos > limiteIntentos) {
  console.log("Game Over el numero era" + " " + numeroIncognita);
}

if(intentos > limiteIntentos){
 numeroIngresado = prompt("ingrese un numero del 1 al 10 quedan" +" "+ intentos );

}