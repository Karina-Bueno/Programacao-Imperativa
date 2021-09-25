let jsonExemplo = {
    "nome" : "Karina",
    "apelido" : "Kah",
    "idade" : "25",
    "usuario" : "buenogkarina",
    "email" : "karina@gmail.com"
}

//console.log(jsonExemplo.email);

let esporte = {
    modalidade: "correr",
    obstaculo: "barras",
    metodo: function (longadistancia){
        console.log("A pessoa terá que: " +this.modalidade+ " e terá como obstaculo " +this.obstaculo+" " +longadistancia);

    }
}

function Carro (cor, modelo, fabricante, ano) {
    this.cor = cor;
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
};

console.log();
let civic = new Carro ("preto", "civic", "honda", "2021");
console.log(civic);
console.log();
let gol = new Carro ("vermelho", "gol", "volkswagen", "2012");
console.log(gol);








esporte.metodo(10);
console.log();
console.log("A pessoa terá que: " +esporte.modalidade+ " e terá como obstaculo " +esporte.obstaculo);