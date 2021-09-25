function arrayObjectsTwo (numero, palavra) {
    let obj = [];
    for (let i = 1; i <= numero; i++) {
        obj.push({palavra: palavra, valor: i});  
    }
    return obj;
}
 
console.log(arrayObjectsTwo(5, "olá"))