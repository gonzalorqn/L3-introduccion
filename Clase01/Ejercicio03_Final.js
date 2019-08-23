function MiFuncion2(numero, cadena) {
    if (cadena != undefined) {
        for (var index = 0; index < numero; index++) {
            console.log(cadena);
        }
    }
    else {
        console.log(0 - numero);
    }
}
MiFuncion2(4);
MiFuncion2(4, "hola");
MiFuncion2(7);
MiFuncion2(2, "chau");
