// PROGRAMACION PARA TODAS LAS PAGINAS WEB

$(document).ready(function(){

	// SELECCION DE TEMA
	var theme = $("#theme");

	// Cambia el tema y guarda cual tema es en el localStorage.
	$("#to-green").click(function(){
		theme.attr("href", "../css/temas/green.css");

		if( typeof(Storage) !== 'undefined' ) {
			console.log('LocalStorage Disponible');
			localStorage.setItem("tema", "../css/temas/green.css");
		} else {
			console.log('LocalStorage NO Disponible');
		}
	});
	
	$("#to-red").click(function(){
		theme.attr("href", "../css/temas/red.css");

		if( typeof(Storage) !== 'undefined' ) {
			console.log('LocalStorage Disponible');
			localStorage.setItem("tema", "../css/temas/red.css");
		} else {
			console.log('LocalStorage NO Disponible');
		}
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "../css/temas/blue.css");

		if( typeof(Storage) !== 'undefined' ) {
			console.log('LocalStorage Disponible');
			localStorage.setItem("tema", "../css/temas/blue.css");
		} else {
			console.log('LocalStorage NO Disponible');
		}
	});
	
	// Carga el tema que se haya seleecionado por la anterior pagina
	var tipoTema = localStorage.getItem("tema");

	if(tipoTema == null){
		theme.attr("href", "../css/temas/green.css");
	}
	else{
		theme.attr("href", tipoTema);
	}


	// BOTON PARA IR ARRIBA
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	
	// LOGIN FALSO
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

});