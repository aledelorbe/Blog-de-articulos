$(document).ready(function(){
	  
	// SLIDER
	$('.galeria').bxSlider({
		mode: 'fade',
		captions: false,
		slideWidth: 1200,
		responsive: true,
		pager: true
	});


	// POSTS
	let fecha = new Date();

	var posts = [
		{
			title: 'Prueba de titulo 1',
			date: 'Publicado el dia ' + fecha.getDate() + " de " + fecha.toLocaleString('default', {month: 'long'}) + " del " + fecha.getFullYear(),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
		},
		{
			title: 'Prueba de titulo 2',
			date: 'Publicado el dia ' + fecha.getDate() + " de " + fecha.toLocaleString('default', {month: 'long'}) + " del " + fecha.getFullYear(),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
		},
		{
			title: 'Prueba de titulo 3',
			date: 'Publicado el dia ' + fecha.getDate() + " de " + fecha.toLocaleString('default', {month: 'long'}) + " del " + fecha.getFullYear(),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
		},
		{
			title: 'Prueba de titulo 4',
			date: 'Publicado el dia ' + fecha.getDate() + " de " + fecha.toLocaleString('default', {month: 'long'}) + " del " + fecha.getFullYear(),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
		},
		{
			title: 'Prueba de titulo 5',
			date: 'Publicado el dia ' + fecha.getDate() + " de " + fecha.toLocaleString('default', {month: 'long'}) + " del " + fecha.getFullYear(),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
		},
		{
			title: 'Prueba de titulo 6',
			date: 'Publicado el dia ' + fecha.getDate() + " de " + fecha.toLocaleString('default', {month: 'long'}) + " del " + fecha.getFullYear(),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
		},
	];

	posts.forEach((item, index) => {
		var post = `
			<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer más</a>
			</article>
		`;

		$("#posts").append(post);
	});
});