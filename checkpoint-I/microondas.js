let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;
function microondas(alimento, tempo) {
    if ((tempo >= alimento) && (tempo < (alimento * 2))) {
        console.log("prato pronto, bom apatite!")
    } else if (tempo > (alimento * 2) && (tempo <= (alimento * 3))) {
        console.log("a comida queimou")
    } else if (tempo < alimento) {
        console.log("tempo insuficiente")
    } else {
        console.log("kabumm")
    }
}
microondas(pipoca,10)