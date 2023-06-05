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

let capitalInicial = parseInt(prompt("Ingrese capital inicial"));
let interes = parseInt(prompt("Ingrese interes anualizado"));
let cantidadMeses = parseInt(prompt("Ingrese cantidad de meses"));

let montoFinal = capitalInicial * (1 + (interes / 12 / 100) * cantidadMeses);

let cantidadRepeticion = parseInt(
  prompt("Ingrese cantidad de meses a simular")
);
