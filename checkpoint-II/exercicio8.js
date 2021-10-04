function arrayObjects (num) {
    let obj = [];
    for (let i = 1; i <= num; i++) {
        obj.push({valor: i});  
    }
    return obj;
}

console.log(arrayObjects(5));