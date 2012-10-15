$(document).ready(function(e) {
	var curr = 0;
	var currImg;
	var total = 16;
	
    var imagenTop = $("#personajeTop img");
    var imagenBot = $("#personajeBot img");
	var flechaI = $("#flechaI");
	var flechaD = $("#flechaD");
	var flechas = $("#flechaI, #flechaD");
	var cargando = $("#cargando");
	
	flechas.css ("cursor", "pointer");
	
	cargando.css ("display", "none");
	
	flechas.hover(function(){
		$("#over", $(this)).fadeToggle(200);
	});
	
	flechas.click(function(){
		cargando.fadeIn (300);
		var dir = $(this).attr("id")=="flechaI"?-1:1;
		changePers (dir);
	})
	
	function changePers (dir) {
		curr = curr+dir>0&&curr+dir<=total?curr+dir:curr+dir<0?total:0;
		currImg = 'images/personajes/p_'+put0s(curr)+'.png';
		imagenTop.attr('src', currImg);
	}
	
	imagenTop.load(function(){
		cargando.css("display", "none");
		imagenTop.css("display", "none");
		imagenTop.fadeIn (500, function(){imagenBot.attr('src', currImg)});
	});
	
	imagenBot.load(function(){
		imagenTop.css("display", "none");	
	});
});

function put0s (toPut) {
	var valStr = toPut.toString();
	while (valStr.length < 2) {
		valStr = "0" + valStr;
	}
	return valStr;
}