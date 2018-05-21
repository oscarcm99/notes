function CrearElementos() {
	// body...
	var miTabla = new Array(4);
	var resultado;
	resultado = document.getElementById('resultado');
	
	 miTabla[0] = "Oscar";
	 miTabla[1] = "Antonov";
	 miTabla[2] = "Al-hamed";
	 miTabla[3] = "Sadio";

	 	for (var i = 0 ; i < miTabla.length; i++) {
	 		resultado.innerHTML += miTabla[i] + " ";
	 		} 
}