class  Contacto{
	constructor(nombre, telefono, direccion){
		this.nombre = nombre;
		this.telefono = telefono;
		this.direccion = direccion;
	}
	cogerNombre(nom){
		this.nombre = nom;
	}
	cogerTelefono(tel){
		this.telefono = tel;
	}
	cogerDireccion(dir){
		this.direccion = dir;
	}
	cambiarNombre(nuevonom){
		this.nombre = nuevonom;
	}
	cambiarTelefono(nuevotel){
		this.telefono = nuevotel;
	}
	cambiarDireccion(nuevodir){
		this.direccion = nuevodir;
	}
	EscribirN(){
    	var rn;
    	rn = document.getElementById('resultadoañadido');
    	rn.innerHTML = "nombre: " +this.nombre + "<br>" +
    					"telefono: " +this.direccion + "<br>" +
    					"direccion: " +this.telefono + "<br>";
	}
}
var miTabla = new Array(5),vn;
function AñadirContacto() {
	// body...
	var  vd, vt;
	miTabla[0] = new Contacto(vn, vd, vt);
	miTabla[1] = new Contacto(vn, vd, vt);
	miTabla[2] = new Contacto(vn, vd, vt);
	miTabla[3] = new Contacto(vn, vd, vt);
	miTabla[4] = new Contacto(vn, vd, vt);
	vn = document.getElementById('nombre').value;
	vt = document.getElementById('telefono').value;
	vd = document.getElementById('direccion').value;
	for(var i = 0; i<miTabla.length; i++){
		miTabla[i].cogerNombre(vn);
		miTabla[i].cogerTelefono(vt);
		miTabla[i].cogerDireccion(vd);
	}
	for(var i = 0; i<miTabla.length; i++){
		miTabla[0].EscribirN();
	}
	
	
	
}
function ModificarContacto(){
	var vant,nnom,ntel,ndir;
	vant = document.getElementById('nomcamb').value;
	nnom = document.getElementById('nommod').value;
	ntel = document.getElementById('telmod').value;
	ndir = document.getElementById('dirmod').value;
for (var i = 0; i <miTabla.length; i++)
	if (vant === vn) {
		miTabla[i].cambiarNombre(nnom);
		miTabla[i].cambiarTelefono(ntel);
		miTabla[i].cambiarDireccion(ndir);
	}
}
function BuscarContacto() {
	
}