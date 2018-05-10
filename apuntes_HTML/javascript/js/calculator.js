function ObtenerOperando(idOperando) {
	// body...
	var miOp;
	miOp = document.getElementById(idOperando);
	return parseInt(miOp.value);
}
function RealizarOperacion(tipoOperacion) {
	// 1 Obtener valor 1º op
	// 2 Obtener valor 2º op
	// 3 Realizar la operacion con los operandos y segun el valor de operacion
	// 4 Guardar resultado

	var vop1;
	var vop2;
	var valor;
	vop1 = ObtenerOperando('Operando1');
	vop2 = ObtenerOperando('Operando2');
	
	if(tipoOperacion == '+')
		valor = vop1 + vop2;
	else if(tipoOperacion == '-')
			valor = vop1 - vop2;
	else if(tipoOperacion == '*')
			valor = vop1 * vop2;
	else if(tipoOperacion == '/')
			valor = vop1 / vop2;
	else
		valor = 0;
	document.getElementById('Resultado').innerHTML = valor;
}