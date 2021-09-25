function loopDePares(number) {
    for(let i = 0; i < 10; i++) {
        if((number + i) % 2 == 0) {
            console.log("O número " + (number+i) + " é par!");
        }
        else {
            console.log(i);
        }
    }
}
//loopDePares(3);

function loopDeImpares(number, word) {
    for(let i = 0; i < 10; i++) {
        if((number + i) % 2 > 0) {
            console.log(word);
        }
        else {
            console.log(i);
        }
    }
}

// loopDeImpares(2, "Digital House");

function soma(number) {
    // 3+2+1 = 6
    let soma = 0;
    for(let i = number; i > 0; i--) {
        soma += i;
    }
    return soma;
}
//console.log(soma(8));

function newArray(size) {
    let arr = [];
    for(let i = 0; i < size; i++) {
        arr[i] = i;
        // arr.push(i);
    }
    return arr;
}
// console.log(newArray(20));

function split(string) {
    
    let arr = [];

    for(let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }

    return arr;
}

console.log(split("olá mundo"));