// dado un numero, devolver sus divisores
function divisores(n){
  for(let i = 1; i <= n ;i++){
    if(n % i === 0){
      console.log(i);
    }
  }
}
divisores(5);
