function reloj(){
    let horacompleta= new Date();
    let horas= horacompleta.getHours();
    let minutos= horacompleta.getMinutes();
    let segundos = horacompleta.getSeconds();
    document.getElementById("horas").innerHTML=horas+":";
    document.getElementById("minutos").innerHTML=minutos+":";
    document.getElementById("segundos").innerHTML=segundos;
    setTimeout("reloj()",1000)
}