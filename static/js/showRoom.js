$(document).ready(imReady);
function shadow()
{
	$(this).css({'z-index':'1000'});
	console.log($(this).attr('z-index'));
	$('#shadow').css({'display':'block'});
	

}
function unshadow()
{
	$('#shadow').css({'display':'none'});
	
}
function imReady()
{

	form={p1:'p1 p1 p1', p2:'p2 p2 p2' , p3:'p3 p3 p3', p4:'p4 p4 p4'}
		
	
	//$('.image').hoverIntent(shadow,unshadow);
	
}
function showDesc(x){

	form={p1:'p1 p1 p1', p2:'p2 p2 p2' , p3:'p3 p3 p3', p4:'p4 p4 p4'}
	var text=form[$(x).attr('id')];
	//console.log(text);
	document.getElementById("text").innerHTML= text;
	$('text').fadeIn('slow');

}

function hideDesc(x){

	document.getElementById("text").innerHTML= '';

}

