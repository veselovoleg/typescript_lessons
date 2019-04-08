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
    } else devidedBy3 
    ? results.get('devidedBy3').push(i) : devidedBy5 
    ? results.get('devidedBy5').push(i) : results.get('others').push(i);
}

console.log(results);

//Array sotrings
let names_arr: ReadonlyArray<string> = ['Tom', 'Jerry', 'Abaddon', 'ZombieBoy'];
let names_arr_copy = names_arr.slice().sort(); //Radonly - можем сортировать копию: сделанную при помощи слайса
console.log({ names_arr_copy }); // => { names_arr_copy: ["Abaddon", "Jerry", "Tom", "ZombieBoy"]}

//numbers
function sort_by_nums (num1: number, num2: number):number{
    return num1 - num2
};

let any_nums = [1, 99, 67, 2, 343, 0];
console.log(any_nums.sort(sort_by_nums)); //=> [0, 1, 2, 67, 99, 343]

let students = [
    { name: 'Logan', birth_year: 1889},
    { name: 'Peter', birth_year: 1991},
    { name: 'Otto', birth_year: 1965},
];

console.log(students.sort((a, b) => a.birth_year - b.birth_year));