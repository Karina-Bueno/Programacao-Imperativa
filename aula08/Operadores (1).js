/* Criando a função aqui, recebendo os parametros: altura e estaAcompanhado, observe que este último parametro pode ser nulo, ou seja, vazio */
function podeSubir(altura, estaAcompanhado = null) {

    /* Se medir mais que 1.40m e menos de 2 metros */
    if (altura <=2.0 && altura >=1.40) {
        return true; // é verdadeiro, ou seja, está autorizada a ir no brinquedo
    }
    
    /* Se medir menos que 1.40m mas está acompanhada */
    if(altura <=1.40 && estaAcompanhado == true) {
        return true; // é verdadeiro, ou seja, está autorizada a ir no brinquedo porém somente se acompanhada
    }

    /* SE medir menos que 1.20m OU SE medir menos que 1.40m mas NÃO está acompanhada */
    if(altura <=1.20 || altura <=1.40 && estaAcompanhado == false) {
        return false; // é falso, ou seja, não pode ir no brinquedo, de jeito nenhum!
    }
    
}