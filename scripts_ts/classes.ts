console.log('\nClasses');

class InternetPerson {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string = 'Anon', type: string = 'default', age: number = 1) {
        this.name = name;
        this.type = type;
        this.age = age;
    }

    info(): void {
        console.log(`${this.name} is ${this.type}`)
    }

}

let anon = new InternetPerson();
let kojima = new InternetPerson('Kojima', 'Genius', 36);
anon.info();
kojima.info();
//let type = kojima.type //type is a private, you cannot access to type  out of class

class Person {
    name: string;
    private age: number = 21;

    constructor(name: string = 'Noname', public username: string = 'Undefined person') {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    info(): void {
        console.log(`${this.name} is ${this.username}`)
    }
}

let tommy = new Person('Tommy', 'Annihilator9000');
console.log(tommy); // => {username: "Annihilator9000", age: 21, name: "Tommy"}
tommy.setAge(33);
console.log(tommy); // => {username: "Annihilator9000", age: 33, name: "Tommy"}
console.log(tommy.username); // => Annihilator9000
tommy.info(); // => Tommy is Annihilator9000

//Inheritance
class Max extends Person {
    name = 'Max';
}

let anna = new Max('Anna', 'beauty_ann');
console.log(anna);//=> {username: "beauty_ann", age: 21, name: "Max"} name is not changes

class Student extends Person {
    country: string;

    constructor(name: string = 'Noname', public username: string = 'Undefined person', country: string = 'Neverland') {
        super(name, username);
        this.country = country;
        //this.age = 45; //Acces denies, because age is private
        //must be protected
    }
}

let nikolay = new Student("Nikolay", "Hacker", "Russia");
console.log(nikolay);//=> {username: "Hacker", age: 21, name: "Nikolay", country: "Russia"}

//Getters/Setters
class FactoryWorker {
    private _speciality: string = 'no speciality';

    set speciality(val: string) {
       if ( val.length > 3)  {
           this._speciality = val;
           console.log(`Speciality was changed to ${ val }`);
        } else console.log('Short speciality name');
    }

    get speciality(): string {
        return console.log(this._speciality), this._speciality;
    }
}

let tall_man = new FactoryWorker();
tall_man.speciality = 'i' // => Short speciality name
tall_man.speciality; // => {_speciality: "no speciality"}
tall_man.speciality = 'engineer'; // => Speciality was changed to engineer
tall_man.speciality; // => {_speciality: "engineer"}

//Static props and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircleArea(radius: number = 1): number {
        return (this.PI * radius) ** 2;
    }
}

console.log(3 * Helpers.PI);
console.log(Helpers.calcCircleArea(12));

//Abstract classes
abstract class Project {
    projectName: string = 'Default';
    budjet: number = 0;

    abstract changeName(name: string):void;

    calcBudget(){
        return this.budjet ? this.budjet * 2 : this.budjet;
    }
}

class ITProject extends Project {
    changeName(name: string):void {
        this.projectName = name;
    }
}

let cyberHand = new ITProject();
cyberHand.changeName('CyberHand');
console.log(cyberHand);// => {projectName: "CyberHand", budjet: 0}

//Private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public readonly name: string){};

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One');
            console.log(`New Instance created`);
        } else console.log(`Instance exists`);
        return OnlyOne.instance;
    }
}

//Constructor of class 'OnlyOne' is private and only accessible within the class declaration.
//let instance = new OnlyOne('Tarma pam pam');

let instance = OnlyOne.getInstance();//=> New Instance created
let secondInstance = OnlyOne.getInstance(); // => Instance exists
let thirdInstance = OnlyOne.getInstance(); // => Instance exists
//instance.name = 'New instance' // Access denied because name is readonly
console.log(instance.name); // => The Only One

