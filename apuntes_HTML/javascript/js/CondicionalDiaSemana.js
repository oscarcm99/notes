function CalcularDia() {
	// body...
	var campoResultado,
		fechaActual,
		diaActual;

	
	campoResultado = document.getElementById('resultado');
	fechaActual = new Date();
	diaActual = fechaActual.getDay();

	switch(diaActual){
		case 1:
			campoResultado.innerHTML = "Entre semana es lunes"
			break;
		case 2:
			campoResultado.innerHTML = "Entre semana es martes"
			break;
		case 3:
			campoResultado.innerHTML = "Entre semana es miercoles"
			break;
		case 4:
			campoResultado.innerHTML = "Entre semana es jueves"
			break;
		case 5:
			campoResultado.innerHTML = "Entre semana es viernes"
			break;
		case 6:
			campoResultado.innerHTML = "Dia no valido es sabado"
			break;
		case 0:
			campoResultado.innerHTML = "Dia no valido es domingo"
			break;
		default:
			campoResultado.innerHTML = "Beiruti viene de ... de bidiminuto"
			break;
	}

}