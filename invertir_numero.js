function numInvert(n){
	n = n.toString()
	var invert_num = "";
	for(var i of n){
		invert_num = i + invert_num;
	}
	console.log(invert_num);
}

numInvert(67);

