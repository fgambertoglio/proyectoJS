class pelicula {
  constructor(id, nombre, genero, puntaje) {
    this.idP = id;
    this.nombreP = nombre;
    this.generoP = genero;
    this.puntajeP = puntaje;
  }
  mostrarCatalogo() {
    console.log(
      `Pelicula: ${this.nombreP} / Genero: ${this.generoP} / Puntaje segun IMDb: ${this.puntajeP}`
    );
  }
}

//  --------------   Creacion de objetos fijos ------------------
const pelicula1 = new pelicula(1, `La vida es bella`, `Comedia`, 8.6);
const pelicula2 = new pelicula(2, `Luces de la ciudad`, `Comedia`, 8.5);
const pelicula3 = new pelicula(3, `Origen`, `Ciencia ficción`, 8.8);
const pelicula4 = new pelicula(
  4,
  `El imperio contraataca`,
  `Ciencia ficción`,
  8.7
);
const pelicula5 = new pelicula(5, `Matrix`, `Ciencia ficción`, 8.7);
const pelicula6 = new pelicula(6, `El caballero oscuro`, `Acción`, 9.0);
const pelicula7 = new pelicula(
  7,
  `Terminator 2: El juicio final`,
  `Acción`,
  8.6
);
const pelicula8 = new pelicula(8, `El viaje de Chihiro`, `Animacion`, 8.6);
const pelicula9 = new pelicula(9, `Toy Story`, `Animacion`, 8.3);
const pelicula10 = new pelicula(
  10,
  `La tumba de las luciérnagas`,
  `Animacion`,
  8.5
);
const pelicula11 = new pelicula(11, `Alien, el octavo pasajero`, `Terror`, 8.5);
const pelicula12 = new pelicula(12, `El resplandor`, `Terror`, 8.4);
const pelicula13 = new pelicula(13, `Cadena perpetua`, `Drama`, 9.3);
const pelicula14 = new pelicula(14, `El padrino`, `Drama`, 9.0);
const pelicula15 = new pelicula(
  15,
  `El señor de los anillos: El retorno del rey`,
  `Fantasia`,
  9.0
);
const pelicula16 = new pelicula(
  16,
  `Mad Max: Furia en la carretera`,
  `Fantasia`,
  8.1
);
// ------- array del catalogo -----
const catalogo = [];
// -------- Agrengando objetos a la array con push ---------------------
catalogo.push(
  pelicula1,
  pelicula2,
  pelicula3,
  pelicula4,
  pelicula5,
  pelicula6,
  pelicula7,
  pelicula8,
  pelicula9,
  pelicula10,
  pelicula11,
  pelicula12,
  pelicula13,
  pelicula14,
  pelicula15,
  pelicula16
);
//  -------------  Funcion para ver catalogo -----------
function verCatalogo(array) {
  console.log(`En nuestro catalogo se encuentran:`);
  array.forEach((pelicula) => pelicula.mostrarCatalogo());
}
//  ----------------- Funcion para solicitar datos para el constructor pelicula y agregarlo a la array catalogo ---------------
function agregarPelicula() {
  let nombreI = prompt(`Ingrese el nombre de la 
película`);
  let generoI = prompt(`Ingrese género de la 
película`);
  let puntajeI = prompt(`Ingrese que puntaje merece la 
película del 1 al 10`);
  const peliculaNueva = new pelicula(
    catalogo.length + 1,
    nombreI,
    generoI,
    puntajeI
  );
  catalogo.push(peliculaNueva);
}

//  -------------- Buscador por Nombre -----------------
function buscarNombre(array) {
  let datoNombre = prompt(`Ingrese el nombre de la pelicula que busca`);
  let busqueda = array.find(
    (dato) => dato.nombreP.toLocaleLowerCase() == datoNombre.toLocaleLowerCase()
  );
  if (busqueda == undefined) {
    console.log(
      `La pelicula ${datoNombre} no esta en el catalogo todavia. Por favor ingreselo en la seccion 'Dinos que peliculas te gustaria ver en el catalogo'`
    );
  } else {
    const resultados = [busqueda];
    verCatalogo(resultados);
  }
}
// ----------------   Buscador por Genero ----------------
function buscarGenero(array) {
  let datoGenero = prompt(`Ingrese el genero que busca`);
  let busqueda = array.filter(
    (dato) => dato.generoP.toLocaleLowerCase() == datoGenero.toLocaleLowerCase()
  );
  if (busqueda == 0) {
    console.log(
      `El genero ${datoGenero} no esta en el catalogo todavia. Por favor ingreselo en la seccion 'Dinos que peliculas te gustaria ver en el catalogo'`
    );
  } else {
    verCatalogo(busqueda);
  }
}

// ---------------- Ordenar peliculas por puntaje ------------------
function ordenarPuntaje(array) {
  array.sort((a, b) => a.puntajeP - b.puntajeP);
  verCatalogo(array);
}
// --------- Menu del buscador ------------
function buscador() {
  let quit = false;
  do {
    let opcionBuscador = parseInt(
      prompt(`Elija una opcion para continuar
    1 - Buscar por nombre
    2 - Buscar por genero
    3 - Ordenar catalogo por puntaje
    0 - Volver a menu principal`)
    );
    switch (opcionBuscador) {
      case 1:
        buscarNombre(catalogo);
        break;
      case 2:
        buscarGenero(catalogo);
        break;
      case 3:
        ordenarPuntaje(catalogo);
        break;
      case 0:
        menuPrincipal();
        quit = true;
        break;
      default:
        console.log(`Opción no válida, ingrese alguna presente en el menu`);
    }
  } while (!quit);
}
// ------------ Menu principal -------------
function menuPrincipal() {
  let salir = false;
  do {
    let opcionIngresada = parseInt(
      prompt(`Elija una opcion para continuar
  1 - Ver catalogo completo
  2 - Buscador
  3 - Dinos que peliculas te gustaria ver en el catalogo
  0 - Salir`)
    );
    switch (opcionIngresada) {
      case 1:
        verCatalogo(catalogo);
        break;
      case 2:
        buscador();
        break;
      case 3:
        agregarPelicula();
        break;
      case 0:
        salir = true;
        console.log(`Gracias por su visita. Vuelva pronto`);
        break;
      default:
        console.log(`Opción no válida, ingrese alguna presente en el menu`);
    }
  } while (!salir);
}
menuPrincipal();
