function loopDeImpares(numero, palavra) {
    for (let i = 0; i <= 100; i++) {
        let soma = numero + i;
        if ((soma % 2) != 0) {
            console.log(palavra);
        }
        else {
            console.log(i); 
        }
    }
    
}
loopDeImpares(10, "impar")