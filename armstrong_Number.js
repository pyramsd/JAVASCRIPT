function armstrong(n){
  n = n.toString();
  count = 0;
  for (i = 0; i < n.length; i++){
    count = count + (Math.pow(parseInt(n[i]), n.length));
  }
  if (parseInt(count) == parseInt(n)){
    return true;
  }else{
    return false
  }
}
console.log(armstrong(9));
