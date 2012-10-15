$(document).ready(function(e) {
	var json = <?php echo $json;?>;
	var videoCodes = new Array ();
	for (var i in json) {
		var curr = json.length - 1 - i;
		var dataObj = json [curr];
		var divObj = $('<div>');
		var pObj = $('<p>');
		pObj.html (dataObj['title']);
		pObj.css ({"position":"absolute",
				   "top":0,
				   "left":110,
				   "width":210});
		divObj.html('<img src="' + dataObj ['thumb'] + '" height="78" />');
		divObj.append (pObj);
		$('#opciones').append(divObj);
		divObj.css ({"background":"url(images/video/opcionBg.png) no-repeat right bottom",
					"position":"absolute",
					"left":330*i,
					"top":0,
					"width":330});
					
		
		videoCodes [curr] = stripCode ( dataObj['video'] );
	}
	
	var videoStr = '<iframe width="751" height="421" src="http://www.youtube.com/embed/' + videoCodes [videoCodes.length-1] + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
	$("#screen").html (videoStr);
	
	function stripCode (toStrip) {
		var start = toStrip.search('=');
		var end = toStrip.search('&');
		var videoCode = toStrip.substring (start+1, end);
		return videoCode;
	}
});