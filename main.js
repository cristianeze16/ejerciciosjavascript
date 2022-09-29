// !Ejercitación:
// *En cada ejercicio utilizar console.log() o alert() para visualizar el resultado en pantalla o en consola.
// *1.    Crear una variable llamada miNombre y guardar en ella su primer nombre.
// *2.    Crear una variable llamada miApellido y guardar en ella su apellido.
// *3.    Crear una variable llamada miEdad y guardar en ella su edad.
// *4.    Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
// *5.    Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
// *6.    Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
// *7.    Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
// *8.    Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
// *9.    Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
//* 10.    Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.

// !let miNombre = "Cristian";
// !let miApellido = "Hermosa";
// !let miEdad = "35";
// !let miMascota = "Zumba";
// !let edadMascota = "8";

let miNombre = prompt("Ingrese su nombre");
let miApellido = prompt("Inrgese su apellido");
let miEdad = parseInt(prompt("Ingrese su edad"));
let miMascota = prompt("Ingrese nombre de su mascota");
let edadMascota = parseInt(prompt("Ingrese edad de su mascota"));

console.log(miNombre);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

// *7.    Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
let nombreCompleto = miNombre + miApellido + miEdad;
// *8.    Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.

let textoPresentacion =
  "Hola soy " +
  miNombre +
  " " +
  miApellido +
  " tengo " +
  miEdad +
  " años" +
  " y tu mascota se llama " +
  miMascota +
  " y tiene una edad de " +
  edadMascota + " años";
console.log(textoPresentacion);
// *9.    Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.

let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

console.log("resultado suma : " + sumaEdades);
console.log("resultado resta :" + restaEdades);
console.log("resultado producto :" + productoEdades);
console.log("resultado division : " + divisionEdades);
