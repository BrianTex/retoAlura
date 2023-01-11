var caracteresEspeciales=["á","Á","é","É","í","Í","ó","Ó","ú","Ú","ï","Ï","ü","Ü","!","¡","¿","?"];
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
function verificarE(){
    var mensaje=document.querySelector("#textArea");
    if(mensaje.value==""){
        alert("ingresa el texto");
    }
    else{
        var bandera=0;
        for(var i=0;bandera==0;i++){
            if(mensaje.value==caracteresEspeciales[i]){
                bandera=1;
            }
        }
        if(bandera==1){
            alert("no se permiten caracteres especiales");
        }
        else{
            encriptar();   
        }
    }
}
function verificarD(){
    var mensaje=document.querySelector("#textArea");
    if(mensaje.value==""){
        alert("ingresa el texto");
    }
    else{
        var bandera=0;
        for(var i=0;bandera==0;i++){
            if(mensaje.value==caracteresEspeciales[i]){
                bandera=1;
            }
        }
        if(bandera==1){
            alert("no se permiten caracteres especiales");
        }
        else{
            desencriptar();
        }
    }
}
function desencriptar(){
    var mensaje=document.getElementById("textArea").value.toLowerCase();
    var mensajeEncriptado= mensaje.replace(/enter/img,"e");
    var mensajeEncriptado= mensajeEncriptado.replace(/imes/img,"i");
    var mensajeEncriptado= mensajeEncriptado.replace(/ober/img,"o");
    var mensajeEncriptado= mensajeEncriptado.replace(/ai/img,"a");
    var mensajeEncriptado= mensajeEncriptado.replace(/ufat/img,"u");
    document.getElementById("mensajeP").innerHTML=mensajeEncriptado;
    var imgB=document.getElementById("imgBuscar");
    document.getElementById("mensajeS").innerHTML="";
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
