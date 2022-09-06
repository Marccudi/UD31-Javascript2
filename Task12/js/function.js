function validarFecha() {
    let text = document.getElementById('Fecha').value;

    let primeraBarra = text.indexOf('/');

    if (primeraBarra > -1) {
        let pos = primeraBarra - 2 + 10;
        let fecha = text.substring(primeraBarra - 2, pos)



        let dateformat = /^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})$/;
        if (fecha && fecha.match(dateformat)) {
            alert("Valida");
        } else {
            alert("No valida");
        }
    }
}

function validarCorreo() {
    let text = document.getElementById('Correo').value;
    let split1 = text.split('@');
    let split2 = split1[1].split('.');
    let user = split1[0];
    let cuenta = split2[0];
    let dominio = split2[1];

    if (/^[a-z0-9.-]+$/i.test(user)) {
        console.log("Antes del arroba correcto");
        if (/^[a-z0-9]+$/i.test(cuenta)) {
            console.log("Entre arroba y punto correcto");
            if (dominio.length <= 3 && dominio.length >= 2) {
                console.log("Correo Correcto");
                alert('El correo ' + text + ' es correcto')
            }
        }
    }
}

//Expresiones regulares
function escapeHTML() {
    let text = document.getElementById('escape').value;
    let replacements=[[/&/, "&amp;"], [/"/, "&quot;"], [/</,"&lt;"], [/>/,"&gt;"]];
     replacements.forEach(function(replace){
         text=text.replace(replace[0], replace[1]);
     });
    alert(text);
}

function revertirNombre() {
    let nombre = document.getElementById('nombre').value;
    let nombreSep = nombre.split(' ');
    let nombreFinal = "";

    nombreFinal = nombreSep[1] + ", " + nombreSep[0];
    alert(nombreFinal);
}

function eliminarPeligros() {
    var cadena = document.getElementById('peligros').value;
    var regex = /<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig;

    var result = cadena.replace(regex, "");
    alert(result);
}