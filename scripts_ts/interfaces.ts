//Interfaces
console.log('\nInterface');

interface WaterAnimal {
    name: string,
    water_type: string,
    has_tail: boolean
}

class Fish implements WaterAnimal {
    name: string;
    water_type: string;
    has_tail: boolean;

    constructor(name: string = 'Tuna', water_type: string = 'sea', has_tail: boolean = true) {
        this.name = name;
        this.water_type = water_type;
        this.has_tail = has_tail;
    }
}

let shooka = new Fish('Shooka', 'River', true);
console.log(shooka);

//Function types
interface DoubleValueFuction {
    (num1: number, num2: number): number;
}

let doubleValueFunc: DoubleValueFuction = function(val1: number, val2: number):number{
    return (val1 + val2) * 2;
}

console.log(doubleValueFunc(12, 12));

//Interface inharitance
interface RiverFish extends WaterAnimal{
    readonly water_type: 'river';
    river_name: string;

    info():string;
}

let vobla: RiverFish = {
    water_type: 'river', //You can not change it ti sea - only 'river'
    name: 'Vobla',
    has_tail: true,
    river_name: 'Volga',
    info():string {
        return `${this.name} lives in ${this.water_type}, called ${this.river_name}.`;
    }
}

//vobla.water_type = 'asdas'; //Cannot assign to 'water_type' because it is a read-only property
console.log(vobla.info());