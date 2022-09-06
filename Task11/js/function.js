let suma=[0,0,0,0,0,0,0,0,0,0,0];
let intento=0;
function random() {
    for (let index = 0; index < 36000; index++) {
        intento=Math.floor(Math.random() * 11)+2;
        suma[intento-2]++;
    }

    for (let index = 0; index <= 10; index++) {
        var numero=index+2;
        document.write(numero + " : " + suma[index]+"<br>");
    }

}

