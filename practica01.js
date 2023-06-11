/* Saludo */
function saludar() {
  let pedirNombre = prompt(`Ingrese su nombre.`);
  console.log(pedirNombre);
  alert(`Bienvenido ${pedirNombre}`);
  return pedirNombre;
}
function perfil() {
  let tiempo = parseInt(
    prompt(`Ingrese meses estimados en el que no retiraria la inversion.`)
  );
  if (tiempo < 2) {
    console.log(`Mire la seccion de Plazo Fijo Tradicional`);
  } else if (tiempo >= 2 && tiempo < 6) {
    console.log(`Mire la seccion de Plazo Fijo Compuesto.`);
  } else if (tiempo >= 7) {
    console.log(`Compre dolares o otra moneda estable.`);
  }
}
/*  funcion para pedir datos del plazo fijo tradicional y calcular. */
function datosPlazoFijoTradicional() {
  let montoInicial = parseInt(prompt(`Ingresa el capital inicial:`));
  let porcentaje = parseInt(prompt(`Ingresa la tasa de interés anual:`));
  let duracion = parseInt(prompt(`Cuantos meses`));
  let totalPFT = montoInicial * (1 + (porcentaje / 12 / 100) * duracion);
  console.log(
    `Ustedes inicia con $${montoInicial} con un interes de ${porcentaje}% por el tiempo de ${duracion} mes/es teniendo $${totalPFT} al final de ese plazo`
  );
}
/* funcion para pedir datos del plazo fijo compuesto y calcular. */
function datosInteresCompuesto() {
  let capitalInicial = parseFloat(prompt("Ingresa el capital inicial:"));
  let tasaInteresMesual = parseFloat(
    prompt("Ingresa la tasa de interés anual:")
  );
  let numeroPeriodos = parseInt(
    prompt("Ingresa el número de que se renovaria el plazo:")
  );

  let montoFinal = capitalInicial;

  for (let i = 0; i < numeroPeriodos; i++) {
    montoFinal *= 1 + tasaInteresMesual / 100 / 12;
  }
  console.log(
    `El monto final es:$${montoFinal} al reinvertir en ${numeroPeriodos} periodos.`
  );
}

/* Instrucciones de datos a ingresar */
function instrucciones() {
  alert(`Se le pedira los siguientes datos:
~ Monto inicial es el monto que invierte.
~ Porcentaje es cuanto le dan a usted anualmente por ese monto
~ Meses es el tiempo que pasara hasta que se libere el plazo y tenga su ganancia`);
}
/* ejecutar saludo */
let pedirNombre = saludar();
/* Perfil del usuario */
perfil();
/* Menu */
let salir = false;
do {
  let opcionIngresada = parseInt(
    prompt(`Elija una opcion para continuar
  1 - Plazo fijo tradicional
  2 - Plazo fijo compuesto
  3 - instrucciones
  0 - Salir`)
  );
  switch (opcionIngresada) {
    case 1:
      datosPlazoFijoTradicional();
      console.log(`Gracias por su visita ${pedirNombre}.`);
      salir = true;
      break;
    case 2:
      datosInteresCompuesto();
      console.log(`Gracias por su visita ${pedirNombre}.`);
      salir = true;
      break;
    case 3:
      instrucciones();
      break;
    case 0:
      console.log(`Gracias por su visita ${pedirNombre}.`);
      salir = true;
      break;
    default:
      console.log(`Opción no válida, ingrese alguna presente en el menu`);
  }
} while (!salir);
