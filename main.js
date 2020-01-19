function devolverResultados(){
    let texto = document.getElementById("zip").value;
    let output = document.getElementById("output");

    let textoValidado=validar(texto); 

        if(textoValidado==-1){
            output.innerHTML="El formato es incorrecto";
        }else{
            output.innerHTML="El formato es correcto";
        }

}

function validar(texto) {
    var regs = [
        new RegExp(/^[0-9]{5}$/),
        new RegExp(/^[0-9]{5}-[0-9]{4}$/),
        new RegExp(/^[0-9]{9}$/),
        new RegExp(/^[0-9]{5} [0-9]{4}$/),
    ];

    let correcto = false;

    regs.forEach(reg => {
        if (reg.test(texto)) {
            correcto = true;
        }
    });

    if (correcto) {
        return texto;
    } else {
        return -1;
    }
}

