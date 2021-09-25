let grupodeamigos = ["Harry", "Ron", "Hermione"];

function imprimirInverso(arr) {
   var novoarray = grupodeamigos.reverse();
    console.log(novoarray)  
}

imprimirInverso(grupodeamigos);


var total = 0;
var numeros = [10, 10, 10];

function somararray(arr) {  
    for ( var i = 0; i < numeros.length; i++ ){
        total += numeros[i];
    }
    console.log(total);
}

somararray(numeros);



