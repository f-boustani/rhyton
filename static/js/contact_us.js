$(document).ready(imReady);
function imReady()
{
	
	
	/*$("#contact").click(function(event){
	
		event.preventDefault();
		
		$("#content").load("/contact_us #content");
	
	});
	
	$("#project").click(function(event){
	
		event.preventDefault();
		
		$("#content").load("/project #ccontent");
	
	});
	
	$("#production").click(function(event){
	
		event.preventDefault();
		
		$("#content").load("/producion #content");
	
	});
	
	*/
	
}

function send_mail(){

	var xmlhttp,finished;
	var email,text,join;
	email=document.getElementById("form_email").value;
	text=document.getElementById("form_message").value;
	join=document.getElementById("checkbox").checked;

	document.getElementById("form_name").value='';
	document.getElementById("form_email").value='';
	document.getElementById("form_message").value='';
	
	if (join == true) {

		var mail_data={'email':email,'message':text,'join':true};
	
	}
	else{

		var mail_data={'email':email,'message':text};
	
	};
	
	console.log(join)
	console.log(mail_data)


	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	};

	xmlhttp.onreadystatechange=function(){

		if (xmlhttp.readyState==4 && xmlhttp.status==200) {

			finished=true;
		};
	};

	$.ajax({

		type:"POST",
		url:"/mail/",
		data: mail_data,
		success: function(json) {

           // console.log(e);
            alert("success"+json);
        },
        error: function(e) {

           // console.log(e)
            alert("Failure"+ JSON.stringify(e));

                    }

	});
}


	
