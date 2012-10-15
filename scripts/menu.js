var secciones = new Array ("index", "galeria", "video", "personajes", "descargas");

$(window).load(function(){
	$('#fullContainer').fadeIn(500);
});

$(document).ready(function(e) {
	$('#fullContainer').css('display','none');
	
	$('#logo a').click(function(e) {
		e.preventDefault();
		$('#fullContainer').fadeToggle (500, function(){window.location=("index.php")});
	});
	
	var opmain = parseInt (secciones.indexOf(pn()));
	var stopper = secciones.length;
	for ( var i = 0; i <stopper; i++ ) {
		var hitSelector = 'div#hit' + i;
		var imgSelector = 'div#glow' + i + ' img#ro';
		if ( i == opmain ) {
			$(imgSelector).css({"display":"block"});
			$(hitSelector + ' a').click(function(e){e.preventDefault()});
			$(hitSelector).html( $(hitSelector + ' a').html() );
		}else {
			$(hitSelector + ' a').hover(function(e) {
				var fadeSelector = $(this).parent().attr('id');
            	var toFade = $('div#glow' + fadeSelector.substr(fadeSelector.length-1, fadeSelector.length) + ' img#ro');
				toFade.fadeToggle(75);
            });
			$(hitSelector + ' a').click(function(e) {
				e.preventDefault();
				var fadeSelector = $(this).parent().attr('id');
            	var toFade = fadeSelector.substr(fadeSelector.length-1, fadeSelector.length);
				$('#fullContainer').fadeToggle (500, function(){window.location=(secciones[toFade]+".php")});
			});
		}
	}
});

function pn () {
	var pn = location.pathname, splitpath = pn.split ("/"), file = splitpath [splitpath.length-1];
	return file.substr (0,file.indexOf("."));
}