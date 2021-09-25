//Exemplo 1
let idades = [22,8,17,14,30,20,50];
let maiores = idades.filter(function(idade){
  return idade> 18 && idade <30;
});

console.log(maiores);


//Exemplo 2
nomes = ["Karina", "Vanessa", "Flavio"];
let result = nomes.filter(function(nome){
  console.log(nome);
  return nome > "Karina"
});

console.log(result);


//Exemplo 3
let numeros = [1,5,9,8];
let soma = numeros.reduce(function(acumulador, numero){
  console.log(acumulador, numero);
  return acumulador + numero;
})

console.log(soma);



//Exemplo 4
let paises = ["Brasil", "Peru", "Cuba", "Russia"];
paises.forEach(function(pais){
    console.log("Pais= "+ pais);
})



//Exercicio 1
let numeros = [2,4,6];
let impares = numeros.map(function(num){
    return num - 1;
});

console.log(impares);



//Exercicio 2
let nomes = ["Ana Claudia","Maria","José","Vanessa","Flávio","Maria"];
let Marias = nomes.filter(function(Marias){
    return Marias == "Maria";
});

console.log(Marias);



//Exercicio 3
//let numeros = [1,5,9,3,7]
//let texto = numeros.reduce(function(acumulador, numero){
   // return acumulador + "-" + numero;
//})
   // console.log(texto);



//Exercicio 4
let animais = ["gato", "passáro", "cachorro", "cavalo"];
animais.forEach(function(animal){
    console.log("O anima é " + animal);
});