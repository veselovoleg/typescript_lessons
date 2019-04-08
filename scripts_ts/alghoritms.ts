console.log('\nAlghoritms');

//Devided by 3 && 5
let results = new Map<string, number[]>(
    [
        ['devidedBy3', []],
        ['devidedBy5', []],
        ['devidedBy3and5', []],
        ['others', []]
        
    ]
);

for(let i = 1; i <= 100; i++){
    let devidedBy3 = i % 3 === 0;
    let devidedBy5 = i % 5 === 0;

    if (devidedBy3 && devidedBy5){
        results.get('devidedBy3and5').push(i);
        results.get('devidedBy3').push(i);
        results.get('devidedBy5').push(i);
    } else devidedBy3 ? results.get('devidedBy3').push(i) : devidedBy5 ? results.get('devidedBy5').push(i) : results.get('others').push(i);
}

console.log(results);