// Dado un texto, devolver la cantidad de vocales que contiene
function vocales(texto){
  let conincidencias = texto.match(/[aeiou]/gi); // vocales de texto
  console.log(`Hay ${conincidencias.length} vocales en ${texto}`);
}
vocales("euiuiweiobwe asawu")
