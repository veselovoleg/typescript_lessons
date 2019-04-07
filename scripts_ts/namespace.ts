//Namespaces
console.log('\nNamespace');

namespace MyMath {
    const PI = 3.14;

    export function calcCircumference(diameter: number = 0): number {
        return diameter * PI;
    }

    export function calcRectangle(width: number = 0, length: number = 0): number {
        return width * length;
    }

    export class Employee {
        private _name: string = 'No name';

        get name() {
            return console.log(this._name), this._name;
        }
        set name(name: string) {
            name.length > 3 ? (this._name = name, console.log(`Name changed to ${name}`)) : console.log('Error!');
        }
    }
}

console.log(MyMath.calcCircumference());
console.log(MyMath.calcCircumference(4));
console.log(MyMath.calcRectangle(12, 4));
let vasya = new MyMath.Employee(); // => No name
console.log(vasya.name); // => No name
vasya.name = 'Vasya'; // => Name changed to Vasya

//Pseudonims
import Employee = MyMath.Employee;
let katya = new Employee();
katya.name = 'Katya';