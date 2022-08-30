// dado un text, devolver la cantidad de vocales y consonantes
function cuentaletras(texto){
  let consonantes = 0, vocales = 0, texto_limpio = "";
  texto_limpio = texto.split("")
                      .filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
                      .join("");

  for(let letra of texto_limpio){
    if(/[áéíóúaeiou]/gi.test(letra)){
      vocales++;
    }else{
      consonantes++;
    }
  }
  return [consonantes, vocales];
}
let letras = cuentaletras("Hola aeoiu qzxcs");

console.log("Consonantes:", letras[0]);
console.log("Vocales:", letras[1]);
