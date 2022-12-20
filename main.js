function limpia(elemento){
    if(elemento.value=="Ingresa el texto..."){
        elemento.value="";
    }
}

function verifica(elemento){
    if(elemento.value==""){
        elemento.value="Ingresa el texto...";
    }
}

function encriptar(){
    document.getElementById("mensajeS").innerHTML="";
    var mensaje=document.getElementById("textArea").value.toLowerCase();
    var mensajeEncriptado= mensaje.replace(/e/img,"enter");
    var mensajeEncriptado= mensajeEncriptado.replace(/i/img,"imes");
    var mensajeEncriptado= mensajeEncriptado.replace(/o/img,"ober");
    var mensajeEncriptado= mensajeEncriptado.replace(/a/img,"ai");
    var mensajeEncriptado= mensajeEncriptado.replace(/u/img,"ufat");
    document.getElementById("mensajeP").innerHTML=mensajeEncriptado;
    var imgB=document.getElementById("imgBuscar");
    imgB.src="";
}

function desencriptar(){
    document.getElementById("mensajeS").innerHTML="";
    var mensaje=document.getElementById("textArea").value.toLowerCase();
    var mensajeEncriptado= mensaje.replace(/enter/img,"e");
    var mensajeEncriptado= mensajeEncriptado.replace(/imes/img,"i");
    var mensajeEncriptado= mensajeEncriptado.replace(/ober/img,"o");
    var mensajeEncriptado= mensajeEncriptado.replace(/ai/img,"a");
    var mensajeEncriptado= mensajeEncriptado.replace(/ufat/img,"u");
    document.getElementById("mensajeP").innerHTML=mensajeEncriptado;
    var imgB=document.getElementById("imgBuscar");
    imgB.src="";
}
function copiar(id_elemento){
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
