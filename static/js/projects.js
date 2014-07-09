$(document).ready(imReady);
function imReady()
{	
	$('#p1').click(function(event){
	
		event.preventDefault();
		$('#plate').css("opacity:0.8; display:block; top:0%; left:0%; width:100%; height:100%;z-index:800;");
		document.getElementById("srcImg").src="/static/images/thumb/2.jpg";
		//$('#img_grid').css("display:block;left:25%; top:6%; width:50%; height:87%;");
		//$('#srcImg').fadeIn(1);
		//$('#srcImg').css("display:inline; z-index:1000; width:100%; height:100%;");
		$('#img_grid').css({'display':'block'});
		$('#shadow').css({'display':'block'});
		console.log("aaa");
		
		
	});

	$('#more').click(function(event){

		event.preventDefault();
		$('#main_grid').hide();
		
		$('#img_grid').fadeIn('slow');
		$('#shadow').css({'display':'block'});
		
	});

	$('#back').click(function(event){

		event.preventDefault();
		$('#main_grid').fadeIn('slow');
		$('#img_grid').css({'display':'none'});
		$('#shadow').css({'display':'none'});
		
	});


}

