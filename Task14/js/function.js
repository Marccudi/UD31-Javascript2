pantalla = document.getElementById("pantalla");

let x = 0;            //contador primer numero
let coma = false;     //Si hay coma seleccionada
let op = false;       //Si hay operacion seleccionada
let opSign = "";      //El signo de la operacion
let numero1 = 0;      //el numero anterior a darle a algun signo de operacion
let numero2 = 0;      //el numero posterior a darle a algun signo de operacion

function num(num) {
    if (x == 0 && num != ".") {
        pantalla.value = num;
        x = num;

    } else {
        if (num == "." && !coma) {
            pantalla.value = pantalla.value + ".0";
            coma = true;
        } else
            if (coma) {
                pantalla.value = parseFloat(pantalla.value) + (num * 0.1);
            } else
                if (x != 0) {
                    pantalla.value = "" + pantalla.value + num;
                }
    }

}

function operar(signo) {
    numero1 = pantalla.value;
    opSign = signo;

    pantalla.value = 0;
    coma = false;
    x = 0;
    op = true;
}

function result() {
    switch (opSign) {
        case "+":
            numero2 = pantalla.value;
            pantalla.value = parseFloat(pantalla.value) + parseFloat(numero1);
            numero1 = numero2;

            coma = false;
            x = 0;
            op = true;
            opSign="";
            break;
        case "-":
            numero2 = pantalla.value;
            pantalla.value = parseInt(numero1) - parseInt(pantalla.value);
            numero1 = numero2;

            coma = false;
            x = 0;
            op = true;
            opSign="";
            break;
        case "*":
            numero2 = pantalla.value;
            pantalla.value = parseInt(numero1) * parseInt(pantalla.value);
            numero1 = numero2;

            coma = false;
            x = 0;
            op = true;
            opSign="";
            break;
        case "/":
            numero2 = pantalla.value;
            pantalla.value = parseInt(numero1) / parseInt(pantalla.value);
            numero1 = numero2;
            
            coma = false;
            x = 0;
            op = true;
            opSign="";
            break;
        case "%":
            numero2 = pantalla.value;
            pantalla.value = parseInt(numero1) % parseInt(pantalla.value);
            numero1 = numero2;

            coma = false;
            x = 0;
            op = true;
            opSign="";
            break;
    }
}

function borrado() {
    pantalla.value = 0;
    x = 0;
    coma = false;
    op = false;
    opSign = "";
    numero1 = 0;
    numero2 = 0;

}
function borradoPar() {
    pantalla.value = 0;
    coma = false;
    x = 0;

}

function atras() {
    let length=pantalla.value.length;
    if (pantalla.value.charAt(length-1)==".") {
        coma=false;
    } else {
        
    }
    pantalla.value=pantalla.value.substring(0,pantalla.value.length-1);
}

function raiz() {
    pantalla.value=Math.sqrt(pantalla.value);
}

function opuesto(){
    pantalla.value=parseInt(pantalla.value*(-1));
}
function invertir(){
    pantalla.value=parseFloat(1/pantalla.value);
}