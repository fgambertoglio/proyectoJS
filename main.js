class pelicula {
  constructor(id, nombre, genero, puntaje) {
    this.idP = id;
    this.nombreP = nombre;
    this.generoP = genero;
    this.puntajeP = puntaje;
  }
  /* mostrarCatalogo() {
    console.log(
      `Pelicula: ${this.nombreP} / Genero: ${this.generoP} / Puntaje segun IMDb: ${this.puntajeP}`
    );
  } */
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
/* ARRAY */
let catalogo = [];

let lista = [];

// Captura de DOM
let nuevaPeliculadiv = document.createElement("div");
let peliculaDiv = document.getElementById("catalogo");
let selectOrden = document.getElementById("selectOrden");
let modalBodyLista = document.getElementById(`modalBody-Lista`);

let verCatalogo = document.getElementById("verCatalogo");
let ocultarCatalogo = document.getElementById("ocultarCatalogo");
let agregarPeliculaBtn = document.getElementById("guardarPeliculaBtn");
let botonDarkMode = document.getElementById("botonDarkMode");
let coincidencia = document.getElementById("coincidencia");
let buscador = document.getElementById("buscador");
let botonLightMode = document.getElementById("botonLightMode");
let btnVerLista = document.getElementById(`listaNav`);
let imprimirLista = document.getElementById(`modal-bodyCarrito`);
/* FUNCIONES */

// -------mostrar la array en DOM -----

function mostrarCatalogo(array) {
  peliculaDiv.innerHTML = ``;
  for (let pelicula of array) {
    let nuevaPeliculadiv = document.createElement("div");
    nuevaPeliculadiv.className = "col-12 col-md-6 col-lg-4 my-2";
    nuevaPeliculadiv.innerHTML = `<div id="${
      pelicula.idP
    }" class="card" style="width: 18rem;">
                               
                            <div class="card-body">
                               <h4 class="card-title">${pelicula.nombreP}</h4>
                               <p>Genero: ${pelicula.generoP}</p>
                              <p class="${
                                (pelicula.puntajeP <= 6 && "text-warning") ||
                                (pelicula.puntajeP >= 7 && "text-success")
                              }">Puntaje IMDb: ${pelicula.puntajeP}</p>
                            <button id="agregarALista${
                              pelicula.idP
                            }" class="btn btn-outline-success">Agregar a pendientes</button>
                             </div>
                          </div>`;

    peliculaDiv.appendChild(nuevaPeliculadiv);
    let agregarBtn = document.getElementById(`agregarALista${pelicula.idP}`);
    agregarBtn.addEventListener(`click`, () => {
      console.log(`se a agregado una pelicula ${pelicula.nombreP}`);
      agregarALista(pelicula);
    });
  }
}
function agregarALista(pelicula) {
  let peliculaAgregada = lista.find((elem) => elem.idP == pelicula.idP);
  if (peliculaAgregada == undefined) {
    lista.push(pelicula);
    localStorage.setItem(`lista`, JSON.stringify(lista));
    console.log(lista);
  } else {
    alert(`${pelicula.nombreP} ya se encuentra en la lista`);
  }
}

verCatalogo.addEventListener("click", () => {
  mostrarCatalogo(catalogo);
});
/* ocultar catalogo */

ocultarCatalogo.addEventListener("click", () => {
  peliculaDiv.innerHTML = ``;
});

/* funciones de ordenar */

function ordenarPuntaje(array) {
  array.sort((a, b) => a.puntajeP - b.puntajeP);
  mostrarCatalogo(array);
}

function ordenarTitulo(array) {
  const arrayAlfabetico = [].concat(array);
  arrayAlfabetico.sort((a, b) => {
    if (a.nombreP > b.nombreP) {
      return 1;
    }
    if (a.nombreP < b.nombreP) {
      return -1;
    }
    return 0;
  });

  mostrarCatalogo(arrayAlfabetico);
}
function ordenarGenero(array) {
  const arrayGenero = [].concat(array);
  arrayGenero.sort((a, b) => {
    if (a.generoP > b.generoP) {
      return 1;
    }
    if (a.generoP < b.generoP) {
      return -1;
    }
    return 0;
  });

  mostrarCatalogo(arrayGenero);
}
/*Dom para elegir ordenamiento */

selectOrden.addEventListener("change", () => {
  console.log(selectOrden.value);
  switch (selectOrden.value) {
    case "1":
      ordenarTitulo(catalogo);
      break;
    case "2":
      ordenarGenero(catalogo);
      break;
    case "3":
      ordenarPuntaje(catalogo);
      break;
    default:
      mostrarCatalogo(catalogo);
      break;
  }
});

/* AGREGAR PELICULAS */
agregarPeliculaBtn.addEventListener("click", function (event) {
  event.preventDefault();
  agregarPelicula(catalogo);
});
function agregarPelicula(array) {
  let nombreI = document.getElementById("tituloInput");
  let generoI = document.getElementById("generoInput");
  let puntajeI = document.getElementById("puntajeInput");

  // Obtener el contenido de los campos de entrada y eliminar espacios en blanco
  let titulo = nombreI.value.trim();
  let genero = generoI.value.trim();
  let puntaje = puntajeI.value.trim();

  // Validar que los campos no estén vacíos
  if (titulo !== "" && genero !== "" && puntaje !== "") {
    // Crear la nueva película
    const peliculaNueva = new pelicula(
      array.length + 1,
      titulo,
      genero,
      puntaje
    );

    // Agregar la película al catálogo
    array.push(peliculaNueva);

    // Actualizar el catálogo en el localStorage
    localStorage.setItem("catalogo", JSON.stringify(array));

    // Limpiar los campos de entrada
    nombreI.value = "";
    generoI.value = "";
    puntajeI.value = "";

    // Mostrar el catálogo actualizado
    mostrarCatalogo(catalogo);
  } else {
    // Mostrar mensaje de error si algún campo está vacío
    alert(
      "Por favor, complete todos los campos antes de agregar una nueva película."
    );
  }
}

/* captura de botones dark/light */

let modoOscuro = localStorage.setItem("modoOscuro", false);

if (modoOscuro == "true") {
  document.body.classList.add("darkMode");
}

botonDarkMode.addEventListener(
  "click",
  () => document.body.classList.add("darkMode"),
  localStorage.setItem("modoOscuro", true)
);

botonLightMode.addEventListener("click", () => {
  console.log(`funciona light boton`);
  document.body.classList.remove("darkMode");
  localStorage.removeItem("modoOscuro");
});

/* LOCAL STORAGE seteo */

if (localStorage.getItem("catalogo")) {
  console.log("Ya existe la key catalogo");
  catalogo = JSON.parse(localStorage.getItem("catalogo"));
} else {
  console.log(`ENTRA POR PRIMERA VEZ. SETEAMOS ARRAY`);
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
  localStorage.setItem("catalogo", JSON.stringify(catalogo));
}

if (localStorage.getItem(`lista`)) {
  lista = JSON.parse(localStorage.getItem(`lista`));
} else {
  lista = [];
  localStorage.setItem(`lista`, lista);
}

/*  Buscador */

function buscarInfo(buscado, array) {
  let busqueda = array.filter((dato) =>
    dato.nombreP.toLowerCase().includes(buscado.toLowerCase())
  );

  busqueda.length == 0
    ? ((coincidencia.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`),
      mostrarCatalogo(busqueda))
    : ((coincidencia.innerHTML = ""), mostrarCatalogo(busqueda));
}
buscador.addEventListener("input", () => {
  console.log(buscador.value);
  buscarInfo(buscador.value, catalogo);
});

/* Ver Lista */

btnVerLista.addEventListener("click", () => {
  verPeliculasLista(lista);
  console.log(`ver lista funciona`);
});
/* FUNCION VER Y ELIMINAR LISTA PENDIENTES */
function verPeliculasLista(array) {
  imprimirLista.innerHTML = ``;
  array.forEach((listaPeliculas) => {
    imprimirLista.innerHTML += `<div id="cardLista${listaPeliculas.idP}" class="card" style="width: 18rem;">
                               
                                <h4 class="card-title">${listaPeliculas.nombreP}</h4>
                               <p>Genero: ${listaPeliculas.generoP}</p>
                              <p class="">Puntaje IMDb: ${listaPeliculas.puntajeP}</p>
                            <button id="btnEliminar${listaPeliculas.idP}" class="btn btn-outline-success">Eliminar de la lista</button>
                             </div>
                          </div>`;
  });

  array.forEach((listaPeliculas) => {
    document
      .getElementById(`btnEliminar${listaPeliculas.idP}`)
      .addEventListener(`click`, () => {
        console.log(`eliminar pelicula`);
        let cardPelicula = document.getElementById(
          `cardLista${listaPeliculas.idP}`
        );
        cardPelicula.remove();
        let peliculaEliminar = array.find(
          (pelicula) => pelicula.idP == listaPeliculas.idP
        );
        console.log(peliculaEliminar);
        let posicion = array.indexOf(peliculaEliminar);
        console.log(posicion);
        array.splice(posicion, 1);
        console.log(array);
        localStorage.setItem(`lista`, JSON.stringify(array));
      });
  });
}
