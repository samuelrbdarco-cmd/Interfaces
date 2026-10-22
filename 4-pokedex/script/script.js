console.log("Hola");

const pokemons = [{
    "id" : 715,
    "nombre" : "Noivern",
    "tipo" : ["Volador", "Dragón" ],
    "altura" : 1.5,
    "peso" : 85.0,
    "sexo" : "Femenino",
    "descripcion" : "Cuando reina la oscuridad, hace temblar incluso a los Hydreigon. En cambio, evita luchar a plena luz.",
    "imagen" : "assets/715.png",
    "region" : "VI",
    "habilidad" : ["Cacheo", "Allanamiento"],
    "categoria" : "Onda Sónica"
},

{
    "id" : 681,
    "nombre" : "Aegislash",
    "tipo" : ["Acero", "Fantasma"],
    "altura" : 1.7,
    "peso" : 53.0,
    "sexo" : "Masculino",
    "descripcion" : "Gracias a su cuerpo de acero y a una barrera de poder espectral, crea una defensa que le permite mitigar prácticamente cualquier ataque.",
    "imagen" : "assets/681.png",
    "region" : "VI",
    "habilidad" : ["Cambio Táctico"],
    "categoria" : "Espada Real"
},

{
    "id" : 892,
    "nombre" : "Urshifu",
    "tipo" : ["Lucha", "Siniestro"],
    "altura" : 1.9,
    "peso" : 105.0,
    "sexo" : "Masculino",
    "descripcion" : "Su estilo de lucha se basa en abatir a sus rivales de un solo golpe. Se abalanza sobre ellos con su puño cincelado por el entrenamiento.",
    "imagen" : "assets/892.png",
    "region" : "VIII",
    "habilidad" : ["Puño Invisible"],
    "categoria" : "Kung-Fu"
},

{
    "id" : 885,
    "nombre" : "Dreepy",
    "tipo" : ["Dragón", "Fantasma"],
    "altura" : 0.5,
    "peso" : 2.0,
    "sexo" : "Femenino",
    "descripcion" : "Se lanza a morder a los Clauncher a pesar de no alimentarse de ellos. Se dice que este hábito es un vestigio de cuando estaba vivo.",
    "imagen" : "assets/885.png",
    "region" : "VIII",
    "habilidad" : ["Cuerpo Puro" , "Allanamiento"],
    "categoria" : "Resentido"
},

{
    "id" : 865,
    "nombre" : "Sirfetchd",
    "tipo" : ["Lucha"],
    "altura" : 0.8,
    "peso" : 117.0,
    "sexo" : "Masculino",
    "descripcion" : "Los ejemplares que superan numerosos combates evolucionan y adoptan esta forma. Abandonan el terreno de combate en cuanto el puerro se seca.",
    "imagen" : "assets/865.png",
    "region" : "VIII",
    "habilidad" : ["Impasible"],
    "categoria" : "Pato Salvaje"
},

{
    "id" : 807,
    "nombre" : "Zeraora",
    "tipo" : ["Eléctrico"],
    "altura" : 1.5,
    "peso" : 44.5,
    "sexo" : "Desconocido",
    "descripcion" : "Las almohadillas de sus patas desprenden descargas eléctricas. Cuando corre, hace que caigan rayos y reverberen los truenos.",
    "imagen" : "assets/807.png",
    "region" : "VII",
    "habilidad" : ["Absorbe Elec"],
    "categoria" : "Fulgor"
},

{
    "id" : 745,
    "nombre" : "Lycanroc",
    "tipo" : ["Roca"],
    "altura" : 0.8,
    "peso" : 25.0,
    "sexo" : "Masculino",
    "descripcion" : "Ataca a sus presas con sus afilados colmillos y garras. Solo obedece las órdenes de aquellos Entrenadores que logran ganarse su confianza.",
    "imagen" : "assets/745.png",
    "region" : "VII",
    "habilidad" : ["Vista Lince", "Ímpetu Arena"],
    "categoria" : "Lobo"
},

{
    "id" : 701,
    "nombre" : "Hawlucha",
    "tipo" : ["Lucha", "Volador"],
    "altura" : 0.8,
    "peso" : 21.5,
    "sexo" : "Masculino",
    "descripcion" : "Controla su posición en el aire con las alas. Lanza ataques desde gran altura que resultan difíciles de evitar.",
    "imagen" : "assets/701.png",
    "region" : "VI",
    "habilidad" : ["Flexibilidad", "Liviano"],
    "categoria" : "Lucha Libre"
},

{
    "id" : 674,
    "nombre" : "Pancham",
    "tipo" : ["Lucha"],
    "altura" : 0.6,
    "peso" : 8.0,
    "sexo" : "Femenino",
    "descripcion" : "Siempre lanza una mirada fulminante al rival para que no lo menosprecie, pero en cuanto se relaja esboza sin querer una sonrisa.",
    "imagen" : "assets/674.png",
    "region" : "VI",
    "habilidad" : ["Puño Férreo", "Rompemoldes"],
    "categoria" : "Juguetón"
},

{
    "id" : 571,
    "nombre" : "Zoroark",
    "tipo" : ["Siniestro"],
    "altura" : 1.6,
    "peso" : 81.1,
    "sexo" : "Masculino",
    "descripcion" : "Se dice que Zoroark atrapa en un mundo de ilusiones a quien lo intenta capturar y que, de esta manera, lo castiga.",
    "imagen" : "assets/571.png",
    "region" : "V",
    "habilidad" : ["Ilusión"],
    "categoria" : "Disfrazorro"
},

{
    "id" : 559,
    "nombre" : "Scraggy",
    "tipo" : ["Lucha", "Siniestro"],
    "altura" : 0.6,
    "peso" : 11.8,
    "sexo" : "Femenino",
    "descripcion" : "Propina un cabezazo inmediato a todo aquel que lo mira a los ojos. Su cráneo es muy duro.",
    "imagen" : "assets/559.png",
    "region" : "V",
    "habilidad" : ["Mudar", "Autoestima"],
    "categoria" : "Mudapiel"
},

{
    "id" : 445,
    "nombre" : "Garchomp",
    "tipo" : ["Dragón", "Tierra"],
    "altura" : 1.9,
    "peso" : 95.0,
    "sexo" : "Masculino",
    "descripcion" : "Vuela tan rápido como un avión a reacción. Nunca se le escapa una presa.",
    "imagen" : "assets/445.png",
    "region" : "IV",
    "habilidad" : ["Velo Arena"],
    "categoria" : "Mach"
},

{
    "id" : 392,
    "nombre" : "Infernape",
    "tipo" : ["Lucha", "Fuego"],
    "altura" : 1.2,
    "peso" : 55.0,
    "sexo" : "Masculino",
    "descripcion" : "Desconcierta a sus rivales con su tremenda agilidad. Su característica forma de luchar utiliza todos sus miembros.",
    "imagen" : "assets/392.png",
    "region" : "IV",
    "habilidad" : ["Mar Llamas"],
    "categoria" : "Llama"
},

{
    "id" : 254,
    "nombre" : "Sceptile",
    "tipo" : ["Planta"],
    "altura" : 1.7,
    "peso" : 52.2,
    "sexo" : "Masculino",
    "descripcion" : "Las hojas que tiene en los brazos son tan afiladas que pueden cortar gruesos árboles. Es invencible cuando combate en la selva.",
    "imagen" : "assets/254.png",
    "region" : "III",
    "habilidad" : ["Espesura"],
    "categoria" : "Bosque"
},

{
    "id" : 94,
    "nombre" : "Gengar",
    "tipo" : ["Fantasma", "Veneno"],
    "altura" : 1.5,
    "peso" : 40.5,
    "sexo" : "Femenino",
    "descripcion" : "De noche, se oculta en las sombras y absorbe el calor de sus víctimas, que sufren escalofríos irrefrenables.",
    "imagen" : "assets/094.png",
    "region" : "I",
    "habilidad" : ["Cuerpo Maldito"],
    "categoria" : "Sombra"
}
];

const barraLateral = document.getElementById("barra_pokemons");
const InformacionPokemons = document.getElementById("informacion_pokemons");

pokemons.forEach(pokemon => {
    const boton = document.createElement("button");
    boton.className = "boton-pokemon";
    boton.innerText = pokemon.nombre;

    boton.addEventListener("click", function() {
        const ficha = document.createElement("div");
        ficha.className = "ficha-pokemon";

        const detalles = document.createElement("div");
        detalles.className = "detalles-pokemon";

        const imagen = document.createElement("img");
        const id = document.createElement("p");
        const nombre = document.createElement("h2");
        const tipo = document.createElement("p");
        const altura = document.createElement("p");
        const peso = document.createElement("p");
        const sexo = document.createElement("p");
        const descripcion = document.createElement("p");
        const region = document.createElement("p");
        const habilidad = document.createElement("p");
        const categoria = document.createElement("p");

        imagen.className = "imagen-pokemon";
        imagen.src = pokemon.imagen;
        imagen.alt = pokemon.nombre;
        id.innerText = "ID: " + pokemon.id;
        nombre.innerText = pokemon.nombre;
        tipo.innerText = "Tipo: " + pokemon.tipo;
        altura.innerText = "Altura: " + pokemon.altura + " m";
        peso.innerText = "Peso: " + pokemon.peso + " kg";
        sexo.innerText = "Sexo: " + pokemon.sexo;
        descripcion.className = "descripcion-pokemon";
        descripcion.innerText = pokemon.descripcion;
        region.innerText = "Región: " + pokemon.region;
        habilidad.innerText = "Habilidad: " + pokemon.habilidad;
        categoria.innerText = "Categoría: " + pokemon.categoria;

        detalles.appendChild(id);
        detalles.appendChild(nombre);
        detalles.appendChild(tipo);
        detalles.appendChild(altura);
        detalles.appendChild(peso);
        detalles.appendChild(sexo);
        detalles.appendChild(region);
        detalles.appendChild(habilidad);
        detalles.appendChild(categoria);
        detalles.appendChild(descripcion);
        ficha.appendChild(imagen);
        ficha.appendChild(detalles);

        InformacionPokemons.innerHTML = "";
        InformacionPokemons.appendChild(ficha);
    });

    barraLateral.appendChild(boton);
});