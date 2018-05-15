function EscribirNumero() {
	// body...
	var campoResultado;
	var numero;
	var contador = 1;

	
	numero = parseInt(document.getElementById('numero').value);
	
    campoResultado =  parseInt(document.getElementById('resultado'));
    
	do{
		campoResultado.innerHTML += " " +contador;
		contador++;
	}while(contador<=numero);
}