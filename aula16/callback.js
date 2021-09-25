function soma(a, b, cb) {
    return a+b+cb();
}

function texto() {
    return " esse é o resultado ";
}

//console.log( soma(5,3, texto) );


function soma(a, b, cb) {
    let result = a+b;
    return cb( result );
}

function texto(p1) {
    return " esse é o resultado " +p1;
}

console.log( soma(5,3, texto));