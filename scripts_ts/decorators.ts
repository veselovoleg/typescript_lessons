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
function logging(val: boolean):any {
    return val ? logged : null;
}

@logging(true)
class Car {}

//Advanced
function printable(constructorFn: Function){
    constructorFn.prototype.print = function(){
        console.log(this);
    }
}

@printable
class Plant{
    name = "Rose";
};

let plant = new Plant();
(<any>plant).print();