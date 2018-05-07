function CalcularEtapa() {
	var campoEdad,
		campoResultado,
		valorEdad;
	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;

	if(valorEdad<=12){
		campoResultado.innerHTML = "infancia";	
	}
	else if (valorEdad > 12 && valorEdad<=17) {
			campoResultado.innerHTML = "adolescencia";	
		}
	else if (valorEdad > 17 && valorEdad<=22) {
			campoResultado.innerHTML = "juventud";
		}
	else if (valorEdad>=23) {
			campoResultado.innerHTML = "adultez";
		}
}