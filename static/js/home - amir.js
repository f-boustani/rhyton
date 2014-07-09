$(document).ready(imReady);
function imReady()
{
	
	slideMood=0;
	currentSlidePic=1;
	maxSlidePic=14;
	showHome();
}
function slideChanger()
{

	if(slideMood==0)
	{
		currentSlidePic+=1;
		slideMood=1;
		if(currentSlidePic>maxSlidePic)
			currentSlidePic=1;
		$("#slidePic2").attr("src","static/images/slides/pic"+currentSlidePic.toString()+".jpg");
		//$('#slidePic1').css({'animation':'hider 1s','-webkit-animation':'hider 1s'});
		//$('#slidePic2').css({'animation':'shower 1s','-webkit-animation':'shower 1s'});
		$('#slidePic1').animate({opacity:'0'},1000);
		$('#slidePic2').animate({opacity:'1'},1000);
		setTimeout(function() {
			slideChanger()
		}, 3000);
	}
	else
	{
		slideMood=0;
		currentSlidePic+=1;
		if(currentSlidePic>maxSlidePic)
			currentSlidePic=1;
		$("#slidePic1").attr("src","static/images/slides/pic"+currentSlidePic.toString()+".jpg");
		$('#slidePic2').animate({opacity:'0'},1000);
		$('#slidePic1').animate({opacity:'1'},1000);
		//$('#slidePic2').css({'animation':'hider 1s','-webkit-animation':'hider 1s'});
		//$('#slidePic1').css({'animation':'shower 1s','-webkit-animation':'shower 1s'});
		setTimeout(function() {
			slideChanger()
		}, 3000);
	}
}
function showHome()
{
	var validHeight=$(window).height()-$('#slidePanel').position().top-$(window).height()/15;
	var validWidth=$(window).width()*5/6;
	

	if(validHeight*1000/563<validWidth)
	{
		var top=($(window).height()-$('#slidePanel').position().top-validHeight)*3/4
		var left=($(window).width()-(validHeight*1000/563))/2

		$('#slidePanel').css({'width':(validHeight*1000/563).toString()+'px','height':validHeight.toString()+'px',
			'margin-left':left.toString()+'px','margin-top':top.toString()+'px'});		
	}
	else
	{
		var top=($(window).height()-$('#slidePanel').position().top-(validWidth*563/1000))*3/4
		var left=($(window).width()-validWidth)/2
		$('#slidePanel').css({'width':validWidth.toString()+'px','height':(validWidth*563/1000).toString()+'px',
			'margin-left':left.toString()+'px','margin-top':top.toString()+'px'});			
		
	}
	$('#slidePic2').css({'margin-top':($('#slidePic1').position().top-$('#slidePic2').position().top-19).toString()+'px'})
	console.log($('#slidePic1').position().top)
	console.log($('#slidePic2').position().top)
	setTimeout(function() {
		slideChanger()
	}, 3000);
}
