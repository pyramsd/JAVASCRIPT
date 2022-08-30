// numero Capicua
function capicua(n){
  let procesado = parseInt(n.toString().split("").reverse().join(""));
  return n === procesado;
}
console.log(capicua(2102));
console.log(capicua(2002));

/*
function capicua(n){
  let precesado = parseInt(n.toString().split("").reverse().join(""));
  if(n === precesado){
    console.log(`Es capicua`);
  }else{
    console.log(`No es capicua`);
  }
}
capicua(2002);
*/
