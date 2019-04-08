console.log('\nDecorators');

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class OtherPerson {
    constructor() {
        console.log('Hi!');
    }
}
/* => 
class OtherPerson {
    constructor() {
        console.log('Hi!');
    }
} //was logged
*/

//Factory
function logging(val: boolean): any {
    return val ? logged : null;
}

@logging(true)
class Car { }

//Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@printable
class Plant {
    name = "Rose";
};

let plant = new Plant();
(<any>plant).print();

//Method, property decorators
function editable(val: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = val;
    }
}

function overwritable(val: boolean): any {
    return function (target: any, propName: string) {
        let newDescriptor: PropertyDescriptor = {
            writable: val
        }

        return newDescriptor;
    }
}

class SiteProject {
    /*
    //Cannot assign to read only property 'name' of object '#<SiteProject>'
    @overwritable(false)
    name: string = 'Space Z';
    */
    name: string;


    //Not in overwritable
    constructor(name: string) {
        this.name = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

let site_for_engineers = new SiteProject('Space Z');
site_for_engineers.calcBudget();
site_for_engineers.name = 'New site';
console.log(site_for_engineers);
/* // Cannot assign to read only property 'calcBudget' of object '#<SiteProject>'
site_for_engineers.calcBudget = function(){
    console.log(2000);
}
*/

//Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`
    "Target": ${ target}
    "methodName": ${ methodName}
    "paramIndex": ${ paramIndex}
    `);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumber(mode: string, @printInfo printAll: boolean) {
        printAll ? console.log(2200) : console.log(1100);
    }
}

let course = new Course('Algebra');
course.printStudentNumber('Any', true); // => 2200
course.printStudentNumber('Any', false);// => 1100
/*
from @printInfo
    "Target": [object Object]
    "methodName": printStudentNumber
    "paramIndex": 1
*/