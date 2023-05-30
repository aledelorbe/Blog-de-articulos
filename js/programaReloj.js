$(document).ready(function(){

	// RELOJ
	// Programacion que unicamente debe funcionar en la pagina del reloj.
	setInterval(function(){
		let fecha = new Date();

		var hora = fecha.getHours();
		var esAM = hora < 12; // Verificar si es AM (hora menor a 12)

		// Convertir la hora a formato de 12 horas
		if (hora > 12) {
		hora = hora - 12;
		} else if (hora === 0) {
		hora = 12;
		}

		var minutos = fecha.getMinutes();
		var segundos = fecha.getSeconds();
		var amPm = esAM ? "AM" : "PM";

		var reloj = hora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0') + ' ' + amPm;
		$('#reloj').html(reloj);
	}, 1000);
});