// dado un string, devolver todos sus substrings
function get_all_substrings(string){
  let substrings = [];
  for(letra in string){
    let comienzo = parseInt(letra);
    for (let i = 0; i <= string.length - comienzo; i++) {
      let final = parseInt(i)+parseInt(comienzo);
      substrings.push(string.substring(comienzo, final));
    }
  }
  return substrings.filter(elemento => elemento.length >= 1);
} 
console.log(get_all_substrings("sergioruiz"));
