// Exercicio 1
/* Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
1. a maior e a menor altura do grupo;
2. a média de altura das mulheres;
3. o número de homens. */

let pessoas = [
    {
      nome: "Atef",
      altura: 1.65,
      sexo:"M",
    },
    {
        nome: "Karina",
        altura: 1.54,
        sexo:"F",
    },
    {
        nome: "Gabriel",
        altura: 1.85,
        sexo:"M",
    },
    {
        nome: "Fernanda",
        altura: 1.58,
        sexo:"F",
    },
]

let novaAltura = 0;
function maiorAltura(maiorAlt){
    maiorAlt.forEach(element => {
        if (element.altura > novaAltura){
            novaAltura = element.altura
        } 
    });
    return(novaAltura)
}
console.log(maiorAltura(pessoas));




// Exercicio 2
