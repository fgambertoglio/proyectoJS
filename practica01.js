// let montoInicial = parseInt(prompt("Ingrese capital inicial"));
// let interes = parseInt(prompt("Ingrese interes anualizado"));
// let interesMensual = interes / 12;
// let cantidadDeMeses = parseInt(prompt("Ingrese cantidad de meses"));
// let interesCalculo = interesMensual / 100;
// let montoFinal1 =
//   montoInicial * interesCalculo * cantidadDeMeses + montoInicial;

// console.log(montoFinal1);
// alert(`El interes mas capital inicial recibido es: $ ${montoFinal1}`);

// let continuar = prompt(
//   "Desea ver el interes compuesto repitiendo el plazo agregando lo ganado. Responda con si o no"
// );
// if (continuar.toLowerCase() == "si") {
//   console.log(montoFinal1 * interesCalculo * cantidadDeMeses);
//   alert(montoFinal1 * interesCalculo * cantidadDeMeses + montoFinal1);
// } else {
//   console.log("Gracias por su visita");
//   alert("Gracias por su visita");
// }

/* 
function pedirNombre() {
  let nombreCliente = prompt("Ingrese su nombre");
  saludarCliente(nombreCliente);
}
function saludarCliente(nombre) {
  alert(`Bienvenido ${nombre} al simulador de plazo fijo`);
}

pedirNombre();

let capitalInicial = parseInt(prompt("Ingrese capital inicial"));
let interes = parseInt(prompt("Ingrese interes anualizado"));
let cantidadMeses = parseInt(prompt("Ingrese cantidad de meses"));
let montoFinal = capitalInicial * (1 + (interes / 12 / 100) * cantidadMeses);
alert(`Al final de ese periodo ustedes tendria $ ${montoFinal}`);

let montoFinal2 = montoFinal * (1 + (interes / 12 / 100) * cantidadMeses);
let continuar = prompt(
  "Desea ver el interes compuesto repitiendo el plazo. Responda con si o no"
);
if (continuar.toLowerCase() == "si") {
  console.log(montoFinal2);
  alert(montoFinal2);
} else {
  console.log(`Gracias por su visita`);
  alert(`Gracias por su visita`);
}
 */

function calculoInteres(capitalInicial, interes, cantidadMeses) {
  let montoFinal = capitalInicial * (1 + (interes / 12 / 100) * cantidadMeses);
  alert(`Al final de ese periodo ustedes tendria $ ${montoFinal}`);
  return montoFinal;
}

function interesCompuesto(total, interes, cantidadMeses) {
  let montoFinal2 = total * (1 + (interes / 12 / 100) * cantidadMeses);
  alert(`Y al final del segundo periodo ustedes tendria $ ${montoFinal2}`);
  return montoFinal2;
}

let capitalInicial = parseInt(prompt("Ingrese capital inicial"));
console.log(capitalInicial);

let interes = parseInt(prompt("Ingrese interes anualizado"));
console.log(interes);

let cantidadMeses = parseInt(prompt("Ingrese cantidad de meses"));
console.log(cantidadMeses);

let total = calculoInteres(capitalInicial, interes, cantidadMeses);
console.log(total);

let montoFinal2 = interesCompuesto(total, interes, cantidadMeses);
console.log(montoFinal2);
