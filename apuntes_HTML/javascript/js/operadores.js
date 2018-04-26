function CalcularOperadores() {
	// realiza operaciones aritméticas con elementos del documento HTML
	var miParrafo;
	var valor; 
	miParrafo = document.getElementById('Resultado');
    valor = 12 + 20;
    miParrafo.innerHTML += 
  				"Sumando los numeros 12  y 20 = " + valor + "<br>";
    valor = 12 - 3;
    miParrafo.innerHTML += 
    			"Restando los numeros 12  y 3 = " + valor + "<br>";
    valor = 12 * 20;
    miParrafo.innerHTML += 
    			"Multiplicando los numeros 12  y 20 = " + valor + "<br>";
    valor = 12 / 4;
    miParrafo.innerHTML += 
    			"Dividiendo los numeros 12  y 4 = " + valor + "<br>";
    valor = 8;
    miParrafo.innerHTML += 
    			"Sumando valor = " + (++valor) + "<br>";
    valor = 8;
    miParrafo.innerHTML += 
    			"Restando valor = " + (--valor) + "<br>";
}