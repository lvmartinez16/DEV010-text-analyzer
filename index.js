
import Analyzer from './analyzer.js'; //este nombre es una variebles declarada en js de analizer


//creo una variable llamada textarea que seleeciono 
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", functionKeyUp);
const contadorPalabras = document.querySelector('li[data-testid="word-count"]');
const contadorCaracteres = document.querySelector('li[data-testid="character-count"]');
const contadorSinEspacio = document.querySelector('li[data-testid="character-no-spaces-count"]');
const contadorLongitud = document.querySelector('li[data-testid="word-length-average"]');
const contadorNúmeros = document.querySelector('li[data-testid="number-count"]');
const contadorSumNum = document.querySelector('li[data-testid="number-sum"]');


//cada vez que suelte la tecla muestre lo escrito en textarea
//contadoranalyzer se llama la constante declara en el archivo analyzer.js
function functionKeyUp() {
  contadorPalabras.textContent = "Palabras:" + Analyzer.getWordCount(textarea.value); //value obtengo valor del textarea**
  contadorCaracteres.textContent = "Caracteres:" + Analyzer.getCharacterCount(textarea.value);
  contadorSinEspacio.textContent = "Caracter sin espacio:" + Analyzer.getCharacterCountExcludingSpaces(textarea.value);
  contadorLongitud.textContent = "Promedio longitud:" + Analyzer.getAverageWordLength(textarea.value);
  contadorNúmeros.textContent = "Números:" + Analyzer.getNumberCount(textarea.value);
  contadorSumNum.textContent = "Suma números:" + Analyzer.getNumberSum(textarea.value); //suma numeros y llama la variables que se declaro para las funciones del analyzer

}

//boton borrar
const btnreset = document.getElementById('reset-button');


btnreset.addEventListener("click", function () {

  textarea.value = "";
  contadorPalabras.textContent = "Palabras:0";
  contadorCaracteres.textContent = "Caracteres:0";
  contadorSinEspacio.textContent = "Carcater sin espacio:0";
  contadorLongitud.textContent = "Promedio longitud:0";
  contadorNúmeros.textContent = "Números:0";
  contadorSumNum.textContent = "Suma números:0";
});






