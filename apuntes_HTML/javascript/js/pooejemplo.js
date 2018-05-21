class Contacto
{
	//Creacion constructor
	constructor(nombre,telefono){
		this.nombre = nombre;
		this.telefono = telefono;
	}
	Escribir(){
		var resultado;
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 	"Nombre: " +this.nombre + "<br>" +
								"telefono: " +this.telefono + "<br>";
	}
	CambiarTelefono(nuevo_t){
		this.telefono = nuevo_t;
	}
	CambiarNombre(nuevo_n){
		this.nombre = nuevo_n; 
	}
}

var contacto1;
var contacto2;

function CrearContacto() {
	// body...
	contacto1  = new Contacto("Oscar", 233232323);
	contacto2  = new Contacto("Sergio", 0329238293);

	contacto1.Escribir();
}
function ModificarContacto() {
	// body...
	var valorN;
	var valorT;

	valorN = document.getElementById('nombre').value;
	valorT = document.getElementById('telefono').value;
	contacto1.CambiarTelefono(valorT);
	contacto1.CambiarNombre(valorN);
	contacto1.Escribir();
}