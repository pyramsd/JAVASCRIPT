// Dada una cadena de texto, comprobar si es palindromo o no
function palindromo(texto){
  var reverse_texto = texto.split().reverse().join();
  if(texto === reverse_texto){
    console.log(`${texto} si es palindromo`);
  }else{
    console.log(`${texto} no es palindromo`);
  }
}

palindromo("arenera");

/*function palindromo(texto){
  let invertido = texto.split("").reverse().join("");
  return (invertido === texto);
}
console.log("¿Es un palindromo? "+palindromo(allivessevilla));*/
