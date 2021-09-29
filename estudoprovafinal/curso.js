//Em um arquivo diferente, crie o objeto literal curso que tem como atributos: 
//nome do curso (string), nota de aprovação (number), faltas máximas (number)
//e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

let Estudantes = require ("./estudosProva");


let curso = {
    nomeDoCurso: "JS",
    faltasMax: 3,
    notas: 7,
    listaDeAlunos: [new Estudantes("Marcelo", 1, [7,8,9,10]),
                    new Estudantes("João", 3, [7,8,9,10]),
                    new Estudantes("Barbara", 2, [7,8,9,10])]
}

console.log(curso);
