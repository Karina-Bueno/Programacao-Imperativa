//Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().//
let array = [7,25];
let soma = array.reduce (function(acumulador, num) {
    return acumulador + num;
});

let novaArray = array.map (function(numero){
    return numero / soma;
});

console.log(array);
console.log(novaArray);
console.log("--------------------");



//Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras*/
let palavras = ["mesa", "computador", "livro", "rádio", "porta",];
let numero = 6;

function filtraPalavras (palavras, numero) {
    return  palavras.filter (palavra => palavra.length > numero) 
};

console.log(filtraPalavras(palavras, numero));
console.log("--------------------")



//Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 
    let alunos = [
        { nome: 'Ana Claudia', nota: 8 },
        { nome: 'Jose', nota: 9 },
        { nome: 'Flavio', nota: 5 },
        { nome: 'Vanessa', nota: 10 },
        { nome: 'Karina', nota: 7 },
    ];
    
    function ordenaNotas (Alunos) {
        return Alunos.sort((nota1,nota2) => nota2.nota - nota1.nota);
    };
    
    console.log(ordenaNotas(alunos));
    
    function ordenaNomes (Alunos) {
        return Alunos.sort(function(nome1,nome2) {
        return nome1.nome < nome2.nome ? -1 : nome1.nome > nome2.nome ? 1 : 0;
        });
    };
    
    console.log(ordenaNomes(alunos));