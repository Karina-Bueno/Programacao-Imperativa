/*Crie um objeto literal Filme representa os dados de um filme (título, diretor, ano, total de votos, 
nota e uma lista de personagens).*/

//No mesmo objeto Filme crie o método votar, que quando chamando irá acrescentar mais um voto ao filme.

//Ao final crie um array com 3 objetos de filmes diferentes e com o método forEach  liste apenas os nomes dos filmes.

let filme = {
    título: "Mulan",
    diretor: "Niki Caro", 
    ano: 2020,
    totalVotos: 33811,
    nota: 3,
    listaPersonagens: ["Liu Yife","Donnie Yen", "Gong Li", "Jet Li"],
    votar: function () {
        this.totalVotos ++
    }
}
filme.votar();

console.log(filme.totalVotos);
console.log("---------------------");




let filmes1 = {
    título: "Senhor dos Anéis",
    diretor: "Peter Jackson", 
    ano: 2002,
    totalVotos: 3458,
    nota: 4.8,
    listaPersonagens: ("Aragorn", "Gandalf", "Frodo Baggins", "Gollum, Legolas"),
}

let filmes2 = {
    título: "Harry Potter",
    diretor: "J. K. Rowling", 
    ano: 1997,
    totalVotos: 3460,
    nota: 5,
    listaPersonagens: ("Hermione Granger", "Harry Potter", "Lord Voldemort"),
}

let filmes3 = {
    título: "Nárnia",
    diretor: " Andrew Adamson", 
    ano: 2005,
    totalVotos: 3460,
    nota: 4,
    listaPersonagens: (" Lúcia Pevensie", "Aslam", "Edmundo Pevensie"),
}

let listaFilm = [filmes1, filmes2, filmes3];

listaFilm.forEach(function (array) {
    console.log(array.título);
});
