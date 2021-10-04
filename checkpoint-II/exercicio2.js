function loopDePares(numero) {
    for (let i = 0; i <= 100; i++) {
        let soma = numero + i;
        if ((soma % 2) == 0) {
            console.log("O número "+ soma + " é par");
        }
        else {
            console.log(i); 
        }
    }
    
}
loopDePares(10)