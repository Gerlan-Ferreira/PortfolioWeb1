function Form_foco(x) {
  x.style.background = "#ccc";
}


function Img_grande(x) {
  x.style.height = "150px";
  x.style.width = "140px";
}

function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "70px";
}

function normalImg2(x){
    x.style.height = "250px";
    x.style.width = "200px";
}

function validacaoEmail(x) {
 
	if (x.value.indexOf("@") == -1 || x.value.indexOf(".") == -1){
		
		document.getElementById("msg_email").innerHTML="<font color='red'>E-mail inválido!</font>";

	}	
	else{
		document.getElementById("msg_email").innerHTML="";
	}	

}
window.onbeforeunload = function () {
    return "";
}

