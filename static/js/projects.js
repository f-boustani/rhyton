$(document).ready(imReady);
var prePage=0;
var lpage=1;
project={'1':['project1','1393','tehran'] , '2':['project2','1392','shiraz']};
folder={'1':3, '2':2};
function imReady()
{	

}

 function Next(){

	if(prePage<lpage)
	{
		
         $('#pre').css({'opacity':'1'});
        var index=(prePage+2).toString();
        var project_name= project[index][0];
        var photo = '/static/images/thumb/' + index;
        var b = photo + "b.jpg";
        var a = photo + "a.jpg";
        document.getElementById("name").innerHTML= project_name;
        document.getElementById("before").src= b ;
        document.getElementById("after").src= a;
                            
		prePage++;
	}
	else
		alarm('next');

	
	
}

function Pre(){

	if(prePage>0)
	{
		
         $('#next').css({'opacity':'1'});
        var index=(prePage).toString();
        var project_name= project[index][0];
        var photo = '/static/images/thumb/' + index;
        var b = photo + "b.jpg";
        var a = photo + "a.jpg";
        document.getElementById("name").innerHTML= project_name;
        document.getElementById("before").src= b ;
        document.getElementById("after").src= a;
                            
		prePage--;
	}
	else
		alarm('pre');

	

}
function alarm(x)
{
	
	$('#'+x).css({'opacity':'0.3'});
        	
	

}


function more(){

	$('#main_grid').hide();
	var f= (prePage+1).toString();
	var year = project[f][1];
	var location = project[f][2];
	var project_name = document.getElementById("name").innerHTML;
	document.getElementById("project_name").innerHTML= project_name;
	document.getElementById("year").innerHTML=year;
	document.getElementById("location").innerHTML=location;
	document.getElementById("main_pic").src="/static/images/thumb/"+f+"/1.jpg";
	$("#main_pic").css({'display':'block'});
	
	var num=folder[f];
	for (var i = 1; i < num; i++) {
		
		document.getElementById("p"+(i).toString()).src="/static/images/thumb/"+f+"/"+(i+1).toString()+".jpg";
		$("#p"+(i).toString()).css({'display':'block'});
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

