const pokeneas = [
  {
    id: 1,
    nombre: 'Paisa Eléctrico',
    altura: 1.7,
    habilidad: 'Descarga de arepa',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/paisa-electrico.jpg',
    fraseFilosofica: 'Pues ave maría pues, ¡la energía y la buena vibra siempre triunfan!'
  },
  {
    id: 2,
    nombre: 'Montañero Fuerte',
    altura: 2.1,
    habilidad: 'Fuerza de carriel',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/montanero-fuerte.jpg',
    fraseFilosofica: 'La montaña no se conquista, se vive con ella en armonía'
  },
  {
    id: 3,
    nombre: 'Acuatroyo',
    altura: 1.5,
    habilidad: 'Chorrito paisa',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/acuatroyo.jpg',
    fraseFilosofica: 'Como el agua que fluye por el río Medellín, nunca te detengas en tu camino'
  },
  {
    id: 4,
    nombre: 'Silletero Floral',
    altura: 1.8,
    habilidad: 'Lluvia de flores',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/silletero-floral.jpg',
    fraseFilosofica: 'De cada dificultad, florece una oportunidad'
  },
  {
    id: 5,
    nombre: 'Bandola Sónica',
    altura: 1.6,
    habilidad: 'Melodía guasca',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/bandola-sonica.jpg',
    fraseFilosofica: 'La música es el puente entre el alma y las estrellas'
  },
  {
    id: 6,
    nombre: 'Metro Volador',
    altura: 3.2,
    habilidad: 'Rapidez naranja',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/metro-volador.jpg',
    fraseFilosofica: 'Siempre avanza, pero nunca olvides de dónde vienes'
  },
  {
    id: 7,
    nombre: 'Orquidela',
    altura: 1.2,
    habilidad: 'Belleza natural',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/orquidela.jpg',
    fraseFilosofica: 'Lo más hermoso de la vida es lo que nace sin pretensiones'
  },
  {
    id: 8,
    nombre: 'Cafetero Místico',
    altura: 1.65,
    habilidad: 'Granos energéticos',
    imagen: 'https://pokenea-bucket.s3.amazonaws.com/cafetero-mistico.jpg',
    fraseFilosofica: 'En cada taza de café hay una historia que contar y un día por comenzar'
  }
];

/**
 * Obtiene un Pokenea aleatorio del array
 * @returns {Object} Un Pokenea aleatorio
 */
const getPokeneaAleatorio = () => {
  const indiceAleatorio = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[indiceAleatorio];
};

/**
 * Obtiene la información básica de un Pokenea aleatorio
 * @returns {Object} Información básica de un Pokenea aleatorio
 */
const getInfoBasica = () => {
  const pokenea = getPokeneaAleatorio();
  return {
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad
  };
};

/**
 * Obtiene la información visual de un Pokenea aleatorio
 * @returns {Object} Información visual de un Pokenea aleatorio
 */
const getInfoVisual = () => {
  const pokenea = getPokeneaAleatorio();
  return {
    id: pokenea.id,
    nombre: pokenea.nombre,
    imagen: pokenea.imagen,
    fraseFilosofica: pokenea.fraseFilosofica
  };
};

module.exports = {
  getInfoBasica,
  getInfoVisual
}; 