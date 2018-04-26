function ObtenerDato1() {
	// body...
    var miDato1;
    var miDato2;
	var miResultado;
    miDato1 = document.getElementById('Dato1');
    miDato2 = document.getElementById('Dato2');
    miResultado = document.getElementById('Resultado');
    miResultado.innerHTML = 
    			"El primer valor es: " + miDato1.value + "<br> El segundo valor es: " + miDato2.value;
}
