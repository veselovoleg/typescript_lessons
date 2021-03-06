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

for (let i = 1; i <= 100; i++) {
    let devidedBy3 = i % 3 === 0;
    let devidedBy5 = i % 5 === 0;

    if (devidedBy3 && devidedBy5) {
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
function sort_by_nums(num1: number, num2: number): number {
    return num1 - num2
};

let any_nums = [1, 99, 67, 2, 343, 0];
console.log(any_nums.sort(sort_by_nums)); //=> [0, 1, 2, 67, 99, 343]

let students = [
    { name: 'Logan', birth_year: 1889 },
    { name: 'Peter', birth_year: 1991 },
    { name: 'Otto', birth_year: 1965 },
];

console.log(students.sort((a, b) => a.birth_year - b.birth_year));

let any_cases: string[] = ['j', 'A', 'z', 'Z', 'c', 'K'];

console.log(any_cases.sort()); // => ["A", "K", "Z", "c", "j", "z"]

//Case intensive sorting
console.log(any_cases.sort((a, b) => {
    a = a.toLowerCase(), b = b.toLowerCase();
    return a === b ? 0 : a < b ? -1 : 1;
})); // => ["A", "c", "j", "K", "Z", "z"]

//or
console.log(any_cases.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));

//Anagrams
function areAnagrams(word1: string, word2: string) {
    let map: Map<string, number> = new Map();

    if (word1.length === word2.length) {
        Array.from(word1).forEach(char => map.get(char)
            ? map.set(char, map.get(char) + 1) : map.set(char, 1));

        for (let char of Array.from(word2)) {
            if (!map.get(char)) return false;
            map.set(char, map.get(char) - 1)
        }
        return Array.from(map.values()).every(val => val === 0);
    } else return false;
};

console.log(areAnagrams('silent', 'listen')); //True
console.log(areAnagrams('night', 'knight')); //False

//Find number without couple
function hasNoCouple(array: number[]):number {
    let arr: number[] = array.map(item => Number(item.toString(2))),
        num: number = arr[0];

    arr.forEach((item: number, index: number) => {
        if (index !== 0) num = num ^ item;
    })

    return parseInt(String(num), 2);
}
let arr_of_nums = [2, 3, 3, 2, 5, 7, 8, 8, 7, 5, 9];
console.log(`Num without couple: ${ hasNoCouple(arr_of_nums) }`); //=> 9

//palindrome
function isPalindrome(str:string):string{
    let tempStr: Set<string> = new Set();

    Array.from(str).forEach(char => {
        tempStr.has(char) ? tempStr.delete(char) : tempStr.add(char);
    })

    return tempStr.size <= 1 ? `${ str } is palindrome` : `${ str } is  not  palindrome`;
}

console.log(isPalindrome('topol')); //false
console.log(isPalindrome('ololo')); //true
console.log(isPalindrome('polopolopolo'));//false
console.log(isPalindrome('polopolopolopolo'));//true
