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

    const regexCaracteres = /[^\s\.,\/#!$%\^&\*;:{}=\-_`~()\[\]]/g; // Expresión regular para buscar caracteres que no sean espacios ni signos de puntuación
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
/* 
    const regex = /\d+/g;   // Expresión regular para buscar números en el texto
    const numerosEnTexto = text.match(regex);  // Obtener todos los números que coinciden con la expresión regular
    let cantidadNumeros = 0;  // Inicializar la variable para contar la cantidad de números

    if (numerosEnTexto !== null) { // Comprobar si se encontraron números en el texto

      cantidadNumeros = numerosEnTexto.length;  // Incrementar la cantidad de números por cada ocurrencia encontrada
    }
    return cantidadNumeros; */
    let cantidadNumeros = 0;  // Inicializar la variable para contar la cantidad de números
    for (let i = 0; i < text.length; i++) { // Recorrer el texto carácter por carácter
      const caracterActual = text.charAt(i);  // Obtener el carácter actual
      if (!isNaN(caracterActual) && caracterActual !== " ") { // Verificar si el carácter es un dígito numérico
        cantidadNumeros++;
        cantidadNumeros++;
        while (i + 1 < text.length && !isNaN(text.charAt(i + 1))) { // Avanzar en el texto para evitar contar el mismo número más de una vez
          i++;
        }
      }
    }

    return cantidadNumeros;
  },
  getNumberSum: (text) => { //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const NumText = /\d+/g; // Expresión regular para buscar números en el texto
    const NumEncontrados = text.match(NumText);
    if (NumEncontrados) {
      const numerosParseados = NumEncontrados.map(numero => parseInt(numero, 10));
      const sumaTotal = numerosParseados.reduce((acumulador, numero) => acumulador + numero, 0);
      return sumaTotal;
    } else {

      return 0; // Si no se encontraron números, retorna 0
    }

  },

}
export default Analyzer;
