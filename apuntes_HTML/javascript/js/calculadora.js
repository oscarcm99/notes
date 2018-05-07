function realizarOperacion(tipo) {

	// body...
    var miDato1;
    var miDato2;
    var suma;
    var resta;
    var multiplicacion;
    var division;
    var resultado;


    miDato1 = document.getElementById('Dato1');
    miDato2 = document.getElementById('Dato2');
    resultado = document.getElementById('Resultado');
    if (tipo == suma) {
    resultado = miDato1 + miDato2;
    resultado.innerHTML = "El resultado es: " +resultado;
    }else
    	if (tipo == resta) {
    		resultado = miDato1 - miDato2;
    		resultado.innerHTML = "El resultado es: " +resultado;
    	}
	else
    	if (tipo == multiplicacion) {
    		resultado = miDato1 * miDato2;
    		resultado.innerHTML = "El resultado es: " +resultado;
    	}
    else
    	if (tipo == division) {
    		resultado = miDato1 / miDato2;
    		resultado.innerHTML = "El resultado es: " +resultado;
    	}
}