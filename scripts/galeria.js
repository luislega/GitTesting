// JavaScript Document
$(document).ready(function(e) {
	//$('#tracer').css({'color':'#FFF'});
	var gal = $('img#gal');
	var galTop = $('img#galTop');
	galTop.css("display","none");
	gal.load(function(){galTop.css("display","none")})
	galTop.load(function(){
		galTop.fadeIn(750, function(){gal.attr ('src', galTop.attr('src'));});
	});
	
	$('#galHit').css('cursor','pointer');
	$('#cerrar').css('cursor','pointer');
	$('#cerrar').click(function(){$('#fs').fadeOut(500)});
	$('#galHit').click(function(){$('#fsImg').attr('src', 'images/galeria/SS_GA_'+put0s(ss_i)+".jpg");$('#fs').toggle();resize()});
	
	function change (dir) {
		//alert (ss_i+dir)
		ss_i = ss_i+dir<0?ss_n-1:ss_i+dir==ss_n?0:ss_i+dir;
		//alert (ss_i)
		
		$('#i_de_n, #i_de_n_fs').text ((ss_i + 1) + " de " + ss_n);
		return ss_i;
	}

	function blink (t) {
		var intervals = new Array (), total=0, t2=0, multiplier, currInterval;
		var target = $("img#glow", t.parent());
		var teiboleraGlow = $("#teibolera-glow img");
		
		while (intervals.length < 7) {
			currInterval = Math.random ()*1000;
			total += currInterval;
			intervals.push ( currInterval );
		}
		multiplier = 500 / total;
		for (var i in intervals) {
			intervals [ i ] = i==0?Math.floor(intervals [ i ]*multiplier):Math.floor(intervals [ i ]*multiplier) + intervals [ i-1 ];
			setTimeout(function(){
				$('#glow', t.parent()).toggle();
				$('#teibolera-glow').toggle();
			}, intervals [i]);
		}
	}
	
    var ss_i = 0,
		ss_n = 15,
		la = $('div#i img#flecha'),
		la_s = $('div#i img#flecha, #fs_la'),
		ra = $('div#d img#flecha'),
		ra_s = $('div#d img#flecha, #fs_ra'),
		lg = $('div#i img#glow'),
		rg = $('div#d img#glow');
		
	la_s.click(function(){$('#fsImg, #fsImgSeeTrough').attr('src', 'images/galeria/SS_GA_'+put0s(change(-1))+".jpg");galTop.attr('src', 'images/galeria/SS_GA_'+put0s(ss_i)+".jpg")});
	la.css('cursor','pointer');
	la.hover(function(e){blink($(this))},function(){$('#i img#glow, #teibolera-glow').toggle()});
	ra_s.click(function(){$('#fsImg, #fsImgSeeTrough').attr('src', 'images/galeria/SS_GA_'+put0s(change(1))+".jpg");galTop.attr('src', 'images/galeria/SS_GA_'+put0s(ss_i)+".jpg")});
	ra.css('cursor','pointer');
	ra.hover(function(e){blink($(this))},function(){$('#d img#glow, #teibolera-glow').toggle()});
	
	$('#fsImgSeeTrough').css('opacity',0);
	
	$(window).resize(function(){
		resize();
	});
	
	var centerFs = $('img.centerFs'),
		marcoFs  = $('#fs #fsMarco'),
		arrowFs  = $('#fs img.fsArrow'),
		glowFs   = $('#fs img.fsGlow'),
		imgFs    = $('#fs #fsImg'),
		cerrar   = $('#fs img#cerrar'),
		fs_la    = $('#fs img#fs_la'),
		fs_lg    = $('#fs img#fs_lg'),
		fs_ra    = $('#fs img#fs_ra'),
		fs_rg    = $('#fs img#fs_rg');
	
	arrowFs.css('cursor','pointer');
	glowFs.css('display','none');
	
	arrowFs.hover(function(){
		var side = $(this).attr('id').substr(3,1);
		$('#fs_' + side + 'g').fadeToggle(100);
	});
	
	function resize () {
		centerFs.css ({
			width: '80%',
			position: 'absolute',
			left: ($(window).width()  - centerFs.outerWidth() ) / 2,
			top:  ($(window).height() - centerFs.outerHeight()) / 2
		});
		
		marcoFs.css ({
			top: parseFloat(imgFs.css('top')) - 7
		});
		
		cerrar.css ({
			left: (parseFloat(centerFs.css('left')) + centerFs.outerWidth() - cerrar.outerWidth() - 3),
			top : (parseFloat(centerFs.css('top')) - cerrar.outerHeight())
		});
		
		glowFs.css ({
			top: ($(window).height() - glowFs.outerHeight()) / 2,
		});
		
		arrowFs.css ({
			top: ($(window).height() - arrowFs.outerHeight()) / 2 - 1,
		});
		
		fs_la.css ({
			left: parseFloat(centerFs.css('left')) - 62
		});
		
		fs_ra.css ({
			left: parseFloat(centerFs.css('left')) + centerFs.outerWidth() - 34
		});
		
		fs_lg.css ({
			left: parseFloat(fs_la.css('left')) - 83
		});
		
		fs_rg.css ({
			left: parseFloat(fs_ra.css('left')) - 112
		});
		
		$('#i_de_n_fs').css ({
			top : parseFloat(centerFs.css('top')) + centerFs.outerHeight() + 10,
			left: ($(window).width() - $('#i_de_n_fs').outerWidth()) / 2
		});
	}
});

function put0s (toPut) {
	var valStr = toPut.toString();
	while (valStr.length < 3) {
		valStr = "0" + valStr;
	}
	return valStr;
}