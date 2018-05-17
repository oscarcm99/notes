#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 30
	
class Contacto{
	//Atributos de Contacto
	public char nombre[N];
	private long telefono;

	//Metodos de Contacto
	public Contacto(char nom[N], long tel){
		strcpy(this.nombre,nom);
		this.telefono = tel; 
	}	
	void Escribir(){
		printf("Nombre %s, Telefono %ld\n", this.nombre, this.telefono);
	}

	void CambiarTelefono(long nt){
		this.telefono = nt;
	}
};

int main(){
	Contacto c1;

	c1 = new Contacto("KABANIYAS",921232329);
	c1.Escribir();
	c1.CambiarTelefono(953120112);
	return EXIT_SUCCESS;
}	
	
	