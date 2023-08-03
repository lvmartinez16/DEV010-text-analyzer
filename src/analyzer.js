const Analyzer = {
  getWordCount: (text) => {//TODO: esta función debe devolver el recuento de palabras que se encuentran en el parámetro text de tipo string.
    /* 
        const textoLimpio = text.trim().split(/\s+/);//realiza una serie de text para obtener un arreglo de palabras limpias. trim elimina espacio inicio y final split
        const conteo = textoLimpio.length;
        return conteo; */
    // Verificar si el texto es vacío o solo contiene signos de puntuación
    // Si el texto está vacío o es nulo, retornar 0
    if (!text || text.trim() === '') {
      return 0;
    }

    const palabras = text.split(/\s+/).filter(palabra => palabra.match(/[a-zA-Z]+/)); // Expresión regular para encontrar palabras y eliminar signos de puntuación
    return palabras.length;// Retornar la cantidad de palabras válidas
  },


  getCharacterCount: (text) => { //TODO: esta función debe devolver el recuento de caracteres que se encuentran en el parámetro textde tipo string.
    /*   return text.length; */
    // Verificar si el texto es vacío o solo contiene signos de puntuación
    if (!text.trim() || /^[.,!¡¿?_;:()[\s]+$/.test(text)) {
      return 0;
    }
    return text.length; // Retornar el recuento de caracteres

  },

  getCharacterCountExcludingSpaces: (text) => {//TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresDeseados = text.replace(/[^\w]/g, ''); // Eliminar los espacios y signos de puntuación usando una expresión regular
    const cantidadCaracteres = caracteresDeseados.length;// Contar el número de caracteres deseados
    return cantidadCaracteres;
  },

  getAverageWordLength: (text) => {//TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);// Dividir el texto en palabras individuales
    let sumaLongitudes = 0;// Inicializar la variable para almacenar la suma de las longitudes de las palabras
    for (let i = 0; i < palabras.length; i++) {// Calcular la suma de las longitudes de todas las palabras
      sumaLongitudes += palabras[i].length;
    }
    const cantidadPalabras = palabras.length;//Calcular la cantidad total de palabras
    const longitudPromedio = sumaLongitudes / cantidadPalabras;// Calcular la longitud promedio
    const longitudPromedioRedondeada = Math.round(longitudPromedio * 100) / 100; // Redondear la longitud promedio a dos decimales
    return longitudPromedioRedondeada;
  },
  getNumberCount: (text) => {  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    const regex = /(?:\b|\s)\d+(?:\.\d+)?(?!\w)/g; // Utilizar una expresión regular para buscar números con o sin decimales
    const numerosEncontrados = text.match(regex);  // Buscar todos los números en el texto y obtenerlos en un array
    const cantidadNumeros = numerosEncontrados ? numerosEncontrados.length : 0;

    return cantidadNumeros;
  },
  getNumberSum: (text) => { //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    const regex = /(?:\b|\s)\d+(?:\.\d+)?(?!\w)/g;// Utilizar una expresión regular para buscar números con o sin decimales
    const numerosEncontrados = text.match(regex);// Buscar todos los números en el texto y obtenerlos en un array
    let sumaNumeros = 0; // Inicializar la variable para almacenar la suma de los números
    if (numerosEncontrados) {// Sumar los números encontrados
      numerosEncontrados.forEach(numero => {
        sumaNumeros += parseFloat(numero);
      });
    }

    return sumaNumeros;

  },

}
export default Analyzer;
