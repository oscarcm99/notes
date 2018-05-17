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
	CambiarTelefono(nt){
		this.telefono = nt;
	}
}


function CrearContacto() {
	// body...
	var contacto1  = new Contacto("Cesar calvo", 233232323),
		contacto2  = new Contacto("Sergio jitano", 0329238293);

	contacto1.Escribir();
}