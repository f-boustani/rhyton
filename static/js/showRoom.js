$(document).ready(imReady);
var prePage=0;
var lpage=1;
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

}
function showDesc(x){

	form={p1:'p1 p1 p1 p1 p1 p1', p2:'p2 p2 p2 p2 p2 p2' , p3:'p3 p3 p3 p3 p3 p3', p4:'p4 p4 p4',p5:'p5p5p5'}
	var text=form[$(x).attr('id')];
	document.getElementById("text").innerHTML= text;
	$('#text').fadeIn('slow');

}

function hideDesc(x){

	$('#text').fadeOut('slow');
	document.getElementById("text").innerHTML= '';

}

function Next_gallery(){

	if(prePage<lpage)
	{
		
        var index=3*(prePage+1).toString();
        var photo = '/static/gallery/';
        var current = (3*prePage)+1;
        for (var i = index+1; i < index+4; i++) {
        	
        	document.getElementById("p"+current.toString()).src=photo+i.toString()+".jpg";
        	document.getElementById("p"+current.toString()).id="p"+i.toString();
        	current++;
        };
                    
		prePage++;
	}
	else
		alarm();
	
}

function Pre_gallery(){

	if(prePage>0)
	{
		
       
        var index=3*prePage;
        var c= index-2;
        var temp=index+1;
        var photo = '/static/gallery/';
        for (var i = c; i < index+1; i++) {
        	document.getElementById("p"+temp.toString()).src=photo+i.toString()+".jpg";
        	document.getElementById("p"+temp.toString()).id="p"+i.toString();
        	temp++;

        };
                       
		prePage--;
	}
	else
		alarm();

}

function alarm()
{
	$('#shadow').css({'width':'100%','height':'100%','z-index':'-10','display':'block'});
	$('#shadow').fadeOut(1500,function(){
        	$('#shadow').css({'width':'0%','height':'0%','z-index':'-100'});
        });

}


