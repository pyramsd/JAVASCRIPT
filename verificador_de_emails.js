// dado un string, devolver si es un email válido
function check(email){
  return /^\w+@\w+\.\w+$/gi.test(email)
}
console.log(check("victor@victor.com"));
