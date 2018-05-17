function EscribirNumero() {
	// body...
	var campoResultado;
	var numero;
	var contador;

	
	numero = parseInt(document.getElementById('numero').value);
	
    campoResultado =  document.getElementById('resultado');
    contador = 1;
    while(contador<=numero){
    	campoResultado.innerHTML += " " +contador;
    	contador++;
    }
    contador = 1;
	do{
		campoResultado.innerHTML += " " +contador;
		contador++;
	}while(contador<=numero);
}