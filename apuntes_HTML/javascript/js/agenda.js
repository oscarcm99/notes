class  Contacto{
	constructor(nombre,telefono,direccion){
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
	EscribirN(){
    	var rn;
    	rn = document.getElementById('resultadoañadido');
    	rn.innerHTML += "nombre: " +this.nombre + "<br>" +
    					"telefono: " +this.direccion + "<br>" +
    					"direccion: " +this.telefono + "<br>";
	}
}
function AñadirContacto() {
	// body...
	var vn, vd, vt;
	var miTabla = new Array(4);
	vn = document.getElementById('nombre').value;
	vt = document.getElementById('telefono').value;
	vd = document.getElementById('direccion').value;
	for(var i = 0; i<miTabla.length; i++){
		miTabla[i].cogerNombre(vn);
		miTabla[i].cogerTelefono(vt);
		miTabla[i].cogerDireccion(vd);
		miTabla[i].EscribirN();
	}
	
	
}
function ModificarContacto(){

}