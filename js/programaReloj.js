$(document).ready(function(){

	// RELOJ
	// Programacion que unicamente debe funcionar en la pagina del reloj.
	setInterval(function(){
		let fecha = new Date();
		var reloj = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
		$('#reloj').html(reloj);
	}, 1000);
});