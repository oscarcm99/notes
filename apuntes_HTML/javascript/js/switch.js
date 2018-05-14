function CalcularEtapa() {
	var campoEdad,
		campoResultado,
		valorEdad;
	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = parseInt(campoEdad.value);
	switch(valorEdad){
		case 12:
			campoResultado.innerHTML = "infancia";
			break;
		case 13:
			campoResultado.innerHTML = "adolescencia";
			break;
		case 17:
			campoResultado.innerHTML = "juventud";
			break;
		case 23:
			campoResultado.innerHTML = "adultez";
			break;
		default:
			campoResultado.innerHTML = "fuerisima";
			break;
	}
}