function split(string) {
    
    let arr = [];

    for(let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }

    return arr;
}

console.log(split("olá mundo"));