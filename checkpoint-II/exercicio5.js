function soma(numero) {
    let soma = 0
    for (let i = 0; i <= numero; i++) {
        soma = soma + i;   
    }
    return soma;
}

console.log(soma(8));