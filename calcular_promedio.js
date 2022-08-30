// dado un array de numeros, devolver su media(promedio)
function promedio(numeros){
  let suma = numeros.reduce((valorAcumulado, numeroActual) => {
    return valorAcumulado + numeroActual;
  });
  let media = suma/numeros.length
  return media;
}
console.log(promedio([1,2,3,45]));

/*
function promedio(array){
  let sum_elements = 0;
  for(let i of array){
    sum_elements += i;
  }
  return sum_elements/array.length;
}
console.log(promedio([1,2,3]));
*/
