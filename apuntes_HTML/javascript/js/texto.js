function CambiarTexto() {
	

	//Cambiar el texto de un elemento con id = "Resultado" del documento HTML 
	var miParrafo;
	var precio = 22.65;//Tipo Number 
	miParrafo = document.getElementById('Resultado');
	precio = precio + 10;
	miParrafo.innerHTML += 
	"Tipo de datos: Number" + "<br>" +
	"El precio es " + precio + "<br>" +
	"El doble del precio es " +(precio*2) + "<br>";
	

	//Cambiamos el tipo de datos de precio
	precio = 'muy caro'; //tipo de dato string
	miParrafo.innerHTML += 
	"Tipo de datos: String" + "<br>" +
	"El precio es " + precio + "<br>" +
	"El doble del precio es " + precio + "<br>";
}