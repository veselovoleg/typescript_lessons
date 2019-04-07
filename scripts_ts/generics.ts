console.log('\nGenerics');

function echo<T>(data: T) {
    return console.log(data), data;
}

echo<number>(89);
echo<string>('Hello');

echo('Length'.length);

//Built-in Generics
const testResults: Array<number> = [12, 23, 2, 43, 32, 0];
testResults.push(99); //Ok
//testResults.push('99'); //Not Ok

//Arrays
function printAll<T>(args: T[]): void {
    args.forEach(element => console.log(element));
}

printAll<string>(['Helevorn', 'Deceptive']);

//Generic Types
const echo2: <T>(data: T) => T = echo;
echo2<string[]>(["Letov", "Cobain"]);

//Generic Class
class SimpleMath<T> {
    baseVal: T;
    poweredVal: T;

    constructor(val1: T, val2: T) {
        this.baseVal = val1;
        this.poweredVal = val2;
    }

    calculate(): number {
        return Number(this.baseVal) ** Number(this.poweredVal);
    }
}

let simpleVal = new SimpleMath<string>('2', '4');
console.log(simpleVal.calculate());

class MyMap<T> {
    private map: { [key: string]: T } = {};

    setItem(key: string, item: T): void {
        this.map[key] = item;
    }
    getItem(key: string): T {
        return this.map[key];
    }
    clear(): void {
        Object.assign(this.map, {});
    }
    print(): void {
        console.log(this.map);
    }
}

let myColors = new MyMap<number>();
myColors.setItem('blue', 5);
myColors.setItem('red', 2);
myColors.print();