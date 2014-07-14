$(document).ready(imReady);
var prePage=0;
var lpage=1;
project={'1':'project1' , '2':'project2'};
folder={'1':3, '2':2};
function imReady()
{	

}

 function Next(){

	if(prePage<lpage)
	{
		
       // var i= (prePage+1).toString();
        var index=(prePage+2).toString();
        var project_name= project[index];
        var photo = '/static/images/thumb/' + index;
        var b = photo + "b.jpg";
        var a = photo + "a.jpg";
        document.getElementById("name").innerHTML= project_name;
        document.getElementById("before").src= b ;
        document.getElementById("after").src= a;
                            
		prePage++;
	}
	else
		alarm();
	
}

function Pre(){

	if(prePage>0)
	{
		
       
        var index=(prePage).toString();
        var project_name= project[index];
        var photo = '/static/images/thumb/' + index;
        var b = photo + "b.jpg";
        var a = photo + "a.jpg";
        document.getElementById("name").innerHTML= project_name;
        document.getElementById("before").src= b ;
        document.getElementById("after").src= a;
                            
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

function more(){

	$('#main_grid').hide();
	var project_name = document.getElementById("name").innerHTML;
	document.getElementById("project_name").innerHTML=project_name;
	var f= (prePage+1).toString();
	var num=folder[f];
	for (var i = 0; i < num; i++) {
		
		document.getElementById("p"+(i+1).toString()).src="/static/images/thumb/"+f+"/"+(i+1).toString()+".jpg";
		$("#p"+(i+1).toString()).css({'display':'block'});
	};
	$('#img_grid').fadeIn('slow');
	$('#shadow').css({'display':'block'});
		

}

function back(){

	$('#main_grid').fadeIn('slow');
	for (var i = 0; i < 3; i++) {
		
		document.getElementById("p"+(i+1).toString()).src="";
		$("#p"+(i+1).toString()).css({'display':'none'});

	};
	$('#img_grid').css({'display':'none'});
	$('#shadow').css({'display':'none'});
		
}

