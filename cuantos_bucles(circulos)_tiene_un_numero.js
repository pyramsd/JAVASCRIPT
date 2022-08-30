/*dado un numero, devolver cuantos bucles tiene el numero
numeros con bucles: 0, 6, 8, 9*/
function Bucles(numero){
  let arrayNumeros = numero.toString().split("");
  let bucles = 0
  for(numero of arrayNumeros){
    numero = parseInt(numero)
    if(numero === 0 || numero === 6 || numero === 9){
      bucles++;
    }else if(numero === 8){
      bucles += 2;
    }
  }
  return bucles;
}
console.log(Bucles(2889));
