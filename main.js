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
// //* 10.    Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.

// //* 11.    Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
// //* 12.    Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
// //* 13.    Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
// //* 14.    Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
// //* 15.    Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
// //* 16.    Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.

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

//* 11.    Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

let alumno = {
  nombre: "Roberto",
  apellido: "Bolaños",
  edad: 12,
  promedio: 8.5,
  inasistencias: 2,
};

console.table(alumno);
console.log("nombre: " + alumno.nombre);
console.log("apellido: " + alumno.apellido);
console.log("edad: " + alumno.edad);
console.log("promedio: " + alumno.promedio);
console.log("inasistencias: " + alumno.inasistencias);

//* 12.Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

let mascota = {
  especie: "perro",
  genero: "hembra",
  nombre: "reina",
  edad: 8,
  color: "negro",
  raza: "ovejero-aleman",
};

console.table(mascota);

console.log("especie: " + mascota.especie);
console.log("genero: " + mascota.genero);
console.log("nombre: " + mascota.nombre);
console.log("edad: " + mascota.edad);
console.log("color: " + mascota.color);
console.log("raza: " + mascota.raza);

//* 13.    Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

let frutas = ["banana", "pera", "anana", "uva", "kiwi"];

console.log("frutas: " + frutas);
console.log("fruta: " + frutas[0]);
console.log("fruta: " + frutas[1]);
console.log("fruta: " + frutas[2]);
console.log("fruta: " + frutas[3]);
console.log("fruta: " + frutas[4]);

//* 14.    Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

let numeros = [0, 1, 2, 3, 4];

console.log("numeros: " + numeros);
console.log("numero: " + numeros[0]);
console.log("numero: " + numeros[1]);
console.log("numero: " + numeros[2]);
console.log("numero: " + numeros[3]);
console.log("numero: " + numeros[4]);

//* 15.    Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.

let familia = [
  "mama",
  "papa",
  "hermano-mayor",
  "hermano-menor",
  "abuelo",
  "abuela",
];

console.log("familia: " + familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
console.log(familia[5]);

//* 16.    Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.

let textoAleatorio = "como mucha "+ frutas[1] + " aproximadamente "  + numeros[3] + " por dia " + "como mi "+ familia[4];

console.log(textoAleatorio);

