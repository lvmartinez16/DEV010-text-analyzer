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

    const regexCaracteres = /[^\s\.,\/#!$%\^&\*;:{}=\-_`~()\[\]0-9]/g; // Expresión regular para buscar caracteres que no sean espacios ni signos de puntuación
    const caracteresEncontrados = text.match(regexCaracteres);

    if (caracteresEncontrados) {
      return caracteresEncontrados.length;
    } else {
      return 0; // Si no se encontraron caracteres, retorna 0
    }
  },
  getAverageWordLength: (text) => {//TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const textoLimpio = text.trim(); // Eliminar espacios y caracteres no deseados del texto
    // Dividir el texto en palabras utilizando los espacios como separadores
    const palabras = textoLimpio.split(/\s+/);
    // Calcular la suma de las longitudes de todas las palabras
    const sumaLongitudes = palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);
    // Calcular el número total de palabras
    const numeroPalabras = palabras.length;
    // Calcular la longitud media de palabras
    const longitudMedia = sumaLongitudes / numeroPalabras;

    return longitudMedia;
  },
  getNumberCount: (text) => {  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    const numerosEncontrados = text.match(/\d+/g);// Utilizamos una expresión regular para buscar números en el texto
    // Si no se encontraron números, retornamos 0
    if (!numerosEncontrados) {
      return 0;
    }

    return numerosEncontrados.length;   // Retornamos la cantidad de números encontrados

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    let regexNumeros = /\d+/g; // Expresión regular para buscar números en el texto
    let numerosEncontrados = text.match(regexNumeros);
    if (numerosEncontrados) {
      let numerosParseados = numerosEncontrados.map(numero => parseInt(numero, 10));
      let sumaTotal = numerosParseados.reduce((acumulador, numero) => acumulador + numero, 0);
      return sumaTotal;
    } else {

      return 0; // Si no se encontraron números, retorna 0
    }
  }


};

export default Analyzer;
