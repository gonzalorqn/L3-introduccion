"use strict";
function MiFuncion(numero, cadena) {
    if (cadena != undefined) {
        for (var index = 0; index < numero; index++) {
            console.log(cadena);
        }
    }
    else {
        console.log(0 - numero);
    }
}
MiFuncion(4);
MiFuncion(4, "hola");
MiFuncion(7);
MiFuncion(2, "chau");
//# sourceMappingURL=Ejercicio03.js.map