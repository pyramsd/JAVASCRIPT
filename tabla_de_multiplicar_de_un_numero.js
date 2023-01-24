function tablaDeMultiplicar(n){
	console.log(`Tabla de multiplicar de ${n}`);
	for(var i = 1; i >= 0; i++){
		if(i <= 12){
			console.log(`${n} x ${i} = `, n*i);
		}
	
	}
}

tablaDeMultiplicar(10);
