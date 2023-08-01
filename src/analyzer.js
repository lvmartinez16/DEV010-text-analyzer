const Analyzer = {
  getWordCount: (text) => {//TODO: esta función debe devolver el recuento de palabras que se encuentran en el parámetro textde tipo string.

    const textoLimpio = text.trim().split(/\s+/);
    const conteo = textoLimpio.length;
    return conteo;

  },


  getCharacterCount: (text) => { //TODO: esta función debe devolver el recuento de caracteres que se encuentran en el parámetro textde tipo string.
    return text.length;

  },

  getCharacterCountExcludingSpaces: (text) => {//TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresDeseados = text.replace(/[^\w]/g, ''); // Eliminar los espacios y signos de puntuación usando una expresión regular
    const cantidadCaracteres = caracteresDeseados.length;// Contar el número de caracteres deseados
    return cantidadCaracteres;
  },

  getAverageWordLength: (text) => {//TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    /* const palabras = text.split(/\W+/).filter(palabra => palabra !== '');// Dividir el texto en palabras individuales, excluyendo los signos de puntuación
    let sumaLongitudes = 0;// Inicializar la variable para almacenar la suma de las longitudes de las palabras

    for (let i = 0; i < palabras.length; i++) { // Calcular la suma de las longitudes de todas las palabras
      sumaLongitudes += palabras[i].length;
    }
    const cantidadPalabras = palabras.length; // Calcular la cantidad total de palabras
    const promedioLongitud = sumaLongitudes / cantidadPalabras;// Calcular el promedio de la longitud
    return promedioLongitud; */
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
    /*  const regex = /\d+/g; // Buscar todos los números en el texto y obtenerlos en un array
     const numerosEncontrados = text.match(regex);
     // Calcular la cantidad de números encontrados
     const cantidadNumeros = numerosEncontrados ? numerosEncontrados.length : 0;
     return cantidadNumeros; */

    const regex = /(?:\b|\s)\d+(?:\.\d+)?(?!\w)/g; // Utilizar una expresión regular para buscar números con o sin decimales
    const numerosEncontrados = text.match(regex);  // Buscar todos los números en el texto y obtenerlos en un array
    const cantidadNumeros = numerosEncontrados ? numerosEncontrados.length : 0;

    return cantidadNumeros;
  },
  getNumberSum: (text) => { //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    /*    const NumText = /\d+/g; // Expresión regular para buscar números en el texto
       const NumEncontrados = text.match(NumText);
       if (NumEncontrados) {
         const numerosParseados = NumEncontrados.map(numero => parseInt(numero, 10));
         const sumaTotal = numerosParseados.reduce((acumulador, numero) => acumulador + numero, 0);
         return sumaTotal;
       } else {
   
         return 0; // Si no se encontraron números, retorna 0
       } */
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