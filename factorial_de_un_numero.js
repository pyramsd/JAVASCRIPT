//v factorial de un numero
function factorial(n){
  let resultado = 1;
  for(let i=1;i<=n;i++){
    resultado *= i;
  }
  return resultado;
}
console.log(factorial(3));
