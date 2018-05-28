class Contacto{
	constructor(n,t,d){
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;
	}
	EscribirLargo(idhtml){
		var resultado;
		resultado = document.getElementById(idhtml);
		resultado.innerHTML += 
				"Nombre: " + this.nombre + "<br>" +
				"Telefono: " + this.telefono + "<br>" +
				"Direccion: " + this.direccion + "<br>";
	}
	EscribirNombre(idhtml){
		var resultado;
		resultado = document.getElementById(idhtml);
		resultado.innerHTML += 
				"Nombre: " + this.nombre + "<br>";
	}
}
class ListaContactos{
	constructor(){
		this.nContactos = 0;
		this.lista = new Array(5);
	}
	InsertarContacto(nom,tel,dir){
		var contacto = new Contacto(nom,tel,dir);
		this.lista[this.nContactos] = contacto;
		this.nContactos++;
	}
	EscribirNombres(idhtml){
		var resultado = document.getElementById(idhtml);
		resultado.innerHTML = " ";
		for(var i=0; i<this.nContactos; i++){
			this.lista[i].EscribirNombre(idhtml);
		}
	} 
}
var miLista = new ListaContactos();

function InsertarContactoLista() {
	// body...
	var mnombre,mdireccion,mtelefono;
	mnombre = document.getElementById('nombre').value;
	mtelefono = document.getElementById('telefono').value;
	mdireccion = document.getElementById('direccion').value;
	miLista.InsertarContacto(mnombre,mtelefono,mdireccion);
	miLista.EscribirNombres('ListaContactoNombre');
}