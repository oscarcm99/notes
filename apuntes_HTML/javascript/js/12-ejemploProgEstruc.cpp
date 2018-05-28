#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 30
typedef struct{
	char nombre[N];
	long telefono;
}Contacto;
void crear_contacto(Contacto *c, char nombre[N], long telefono){
	strcpy(c->nombre,nombre);
	c->telefono = telefono; 
}
void escribir_contactos(Contacto c){
	printf("Nombre %s, Telefono %ld\n", c.nombre, c.telefono);
	
}
void cambiar_telefono(Contacto *c, long nt){
	c->telefono = nt;
}
int main(){
	Contacto c1;
	char nom[N];
	long tel;

	crear_contacto(&c1,"Merge",654303212);
	escribir_contactos(c1);
	cambiar_telefono(&c1, 634323442);
	escribir_contactos(c1);
	
	return EXIT_SUCCESS;
}