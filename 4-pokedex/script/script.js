const pokemons = [{
    "id" : 715,
    "nombre" : "Noivern",
    "tipo" : ["Volador", "Dragón" ],
    "altura" : 1.5,
    "peso" : 85.0,
    "sexo" : "femenino",
    "descripcion" : "Cuando reina la oscuridad, hace temblar incluso a los Hydreigon. En cambio, evita luchar a plena luz.",
    "imagen" : "assets/715.png",
    "region" : "VI",
    "Habilidad" : ["Cacheo", "Allanamiento"],
    "Categoria" : "Onda Sónica"
},

{
    "id" : 681,
    "nombre" : "Aegislash",
    "tipo" : ["Acero", "Fantasma"],
    "altura" : 1.7,
    "peso" : 53.0,
    "sexo" : "masculino",
    "descripcion" : "Gracias a su cuerpo de acero y a una barrera de poder espectral, crea una defensa que le permite mitigar prácticamente cualquier ataque.",
    "imagen" : ["assets/681.png", "assets/681_f2.png"],
    "region" : "VI",
    "Habilidad" : ["Cambio Táctico"],
    "Formas" : ["Escudo" , "Espada"],
    "Categoria" : "Espada Real"
},

{
    "id" : 892,
    "nombre" : "Urshifu",
    "tipo" : ["Lucha", "Siniestro"],
    "altura" : 1.9,
    "peso" : 105.0,
    "sexo" : "masculino",
    "descripcion" : "Su estilo de lucha se basa en abatir a sus rivales de un solo golpe. Se abalanza sobre ellos con su puño cincelado por el entrenamiento.",
    "imagen" : "",
    "region" : "VIII",
    "Habilidad" : ["Puño Invisible"],
    "Estilos" : ["Brusco" , "Fluido"],
    "Categoria" : "Kung-Fu"
},

{
    "id" : 885,
    "nombre" : "Dreepy",
    "tipo" : ["Dragón", "Fantasma"],
    "altura" : 0.5,
    "peso" : 2.0,
    "sexo" : "femenino",
    "descripcion" : "Se lanza a morder a los Clauncher a pesar de no alimentarse de ellos. Se dice que este hábito es un vestigio de cuando estaba vivo.",
    "imagen" : "",
    "region" : "VIII",
    "Habilidad" : ["Cuerpo Puro" , "Allanamiento"],
    "Categoria" : "Resentido"
},

{
    "id" : 865,
    "nombre" : "Sirfetchd",
    "tipo" : ["Lucha"],
    "altura" : 0.8,
    "peso" : 117.0,
    "sexo" : "masculino",
    "descripcion" : "Los ejemplares que superan numerosos combates evolucionan y adoptan esta forma. Abandonan el terreno de combate en cuanto el puerro se seca.",
    "imagen" : "",
    "region" : "VIII",
    "Habilidad" : ["Impasible"],
    "Categoria" : "Pato Salvaje"
},

{
    "id" : 807,
    "nombre" : "Zeraora",
    "tipo" : ["Eléctrico"],
    "altura" : 1.5,
    "peso" : 44.5,
    "sexo" : "Desconocido",
    "descripcion" : "Las almohadillas de sus patas desprenden descargas eléctricas. Cuando corre, hace que caigan rayos y reverberen los truenos.",
    "imagen" : "",
    "region" : "VII",
    "Habilidad" : ["Absorbe Elec"],
    "Categoria" : "Fulgor"
},

{
    "id" : 745,
    "nombre" : "Lycanroc",
    "tipo" : ["Roca"],
    "altura" : 0.8,
    "peso" : 25.0,
    "sexo" : "masculino",
    "descripcion" : "Ataca a sus presas con sus afilados colmillos y garras. Solo obedece las órdenes de aquellos Entrenadores que logran ganarse su confianza.",
    "imagen" : "",
    "region" : "VII",
    "Habilidad" : ["Vista Lince", "Ímpetu Arena"],
    "Formas" : ["Diurna" , "Nocturna", "Crepuscular"],
    "Categoria" : "Lobo"
},

{
    "id" : 701,
    "nombre" : "Hawlucha",
    "tipo" : ["Lucha", "Volador"],
    "altura" : 0.8,
    "peso" : 21.5,
    "sexo" : "masculino",
    "descripcion" : "Controla su posición en el aire con las alas. Lanza ataques desde gran altura que resultan difíciles de evitar.",
    "imagen" : "",
    "region" : "VI",
    "Habilidad" : ["Flexibilidad", "Liviano"],
    "Categoria" : "Lucha Libre"
},

{
    "id" : 674,
    "nombre" : "Pancham",
    "tipo" : ["Lucha"],
    "altura" : 0.6,
    "peso" : 8.0,
    "sexo" : "femenino",
    "descripcion" : "Siempre lanza una mirada fulminante al rival para que no lo menosprecie, pero en cuanto se relaja esboza sin querer una sonrisa.",
    "imagen" : "",
    "region" : "VI",
    "Habilidad" : ["Puño Férreo", "Rompemoldes"],
    "Categoria" : "Juguetón"
},

{
    "id" : 571,
    "nombre" : "Zoroark",
    "tipo" : ["Siniestro"],
    "altura" : 1.6,
    "peso" : 81.1,
    "sexo" : "masculino",
    "descripcion" : "Se dice que Zoroark atrapa en un mundo de ilusiones a quien lo intenta capturar y que, de esta manera, lo castiga.",
    "imagen" : "",
    "region" : "V",
    "Habilidad" : ["Ilusión"],
    "Categoria" : "Disfrazorro"
},

{
    "id" : 559,
    "nombre" : "Scraggy",
    "tipo" : ["Lucha", "Siniestro"],
    "altura" : 0.6,
    "peso" : 11.8,
    "sexo" : "femenino",
    "descripcion" : "Propina un cabezazo inmediato a todo aquel que lo mira a los ojos. Su cráneo es muy duro.",
    "imagen" : "",
    "region" : "V",
    "Habilidad" : ["Mudar", "Autoestima"],
    "Categoria" : "Mudapiel"
},

{
    "id" : 445,
    "nombre" : "Garchomp",
    "tipo" : ["Dragón", "Tierra"],
    "altura" : 1.9,
    "peso" : 95.0,
    "sexo" : "masculino",
    "descripcion" : "Vuela tan rápido como un avión a reacción. Nunca se le escapa una presa.",
    "imagen" : "",
    "region" : "IV",
    "Habilidad" : ["Velo Arena"],
    "Categoria" : "Mach"
},

{
    "id" : 392,
    "nombre" : "Infernape",
    "tipo" : ["Lucha", "Fuego"],
    "altura" : 1.2,
    "peso" : 55.0,
    "sexo" : "masculino",
    "descripcion" : "Desconcierta a sus rivales con su tremenda agilidad. Su característica forma de luchar utiliza todos sus miembros.",
    "imagen" : "",
    "region" : "IV",
    "Habilidad" : ["Mar Llamas"],
    "Categoria" : "Llama"
},

{
    "id" : 254,
    "nombre" : "Sceptile",
    "tipo" : ["Planta"],
    "altura" : 1.7,
    "peso" : 52.2,
    "sexo" : "masculino",
    "descripcion" : "Las hojas que tiene en los brazos son tan afiladas que pueden cortar gruesos árboles. Es invencible cuando combate en la selva.",
    "imagen" : "",
    "region" : "III",
    "Habilidad" : ["Espesura"],
    "Categoria" : "Bosque"
},

{
    "id" : 94,
    "nombre" : "Gengar",
    "tipo" : ["Fantasma", "Veneno"],
    "altura" : 1.5,
    "peso" : 40.5,
    "sexo" : "femenino",
    "descripcion" : "De noche, se oculta en las sombras y absorbe el calor de sus víctimas, que sufren escalofríos irrefrenables.",
    "imagen" : "",
    "region" : "I",
    "Habilidad" : ["Cuerpo Maldito"],
    "Categoria" : "Sombra"
}
];
