let montoInicial = parseInt(prompt("Ingrese importe inicial"));
let interes = parseInt(prompt("Ingrese interes anualizado"));
let interesMensual = interes / 12;
let cantidadDeMeses = parseInt(prompt("Ingrese cantidad de meses"));
let interesCalculo = interesMensual / 100;
let montoFinal1 =
  montoInicial * interesCalculo * cantidadDeMeses + montoInicial;

console.log(montoFinal1);
alert(`El interes recibido es: $ ${montoFinal1}`);

let continuar = prompt(
  "Desea ver pronostico de interes compuesto repitiendo el plazo. Responda con si o no"
);
if (continuar.toLowerCase() == "si") {
  console.log(montoFinal1 * interesCalculo * cantidadDeMeses);
  alert(montoFinal1 * interesCalculo * cantidadDeMeses + montoFinal1);
} else {
  console.log("Gracias por su visita");
  alert("Gracias por su visita");
}
