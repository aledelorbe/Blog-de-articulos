$(document).ready(function(){

	// RELOJ
	setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
	}, 1000);
});