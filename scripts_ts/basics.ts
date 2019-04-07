console.log('\nBasics');

//array
let arr: (string | number)[] = ['home', 52, 48, 'moon'];
let anyArr: any[] = [true, 'true', 1, { name: 'Big Al' }];

//tuples
let tuple: [string, number] = ['home', 42]; //['home', 42, 42] === error

//enums
enum Color {
    Gray, //0
    Blue, //1
    Red,  //2
    Orange = 100, //100
    Green  //101
}

let myColor: Color = Color.Blue;
console.log(`Enum. myColor: ${myColor}`);// => 1 (number of position)}

//function types
let multiply: (val1: number, val2: number) => number;

multiply = function (val1: number = 1, val2: number = 1): number {
    let result = val1 * val2;
    return console.log(`${ val1 } * ${ val2 } = ${ result }`), result;
};

multiply(45, 98);

//objects
let userData: {
    name: string,
    age: number
} = {
    name: 'Fosya',
    age: 2
};

//complex objects
let shop_session: {
    data: number[],
    output: (all: boolean) => number[]
} = {
    data: [100, 200, 456, 788],
    output(all: boolean): number[] {
        return all ? (console.log(`data: ${this.data}`), this.data) : (console.log(`data: ${[]}`), []);
    }
}

shop_session.output(true);

type Complex = {
    data: number[],
    output: (all: boolean) => number[]
};

let types_shop_session: Complex = { //Using of types
    data: [100, 200, 456, 788],
    output(all: boolean): number[] {
        return all ? this.data : [];
    }
}

//union types
let age: number | string;
age = 27;
age = '27';

//never 
function neverReturns(): never {
    throw new Error('Error!');
}

//console.log(neverReturns());

const greet = (name: string = 'Anon'): void => console.log(`Hello, ${name}!`);

greet('Mark');

//spread
function makeArr(...args: number[]): number[] {
    return console.log(args), args;
}

makeArr(12, 4, 23, 234, 45, 3223, 322);

function makeOtherArr(str: string, ...args: number[]): (string | number)[] {
    let mutatedArgs = [str, ...args];
    return console.log(mutatedArgs), mutatedArgs;
}

makeOtherArr('Hello', 1, 2, 23);