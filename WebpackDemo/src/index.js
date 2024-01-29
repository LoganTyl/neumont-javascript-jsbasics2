import './style.scss';
import {pizza_app} from './pizza';

document.getElementById('pizza').innerHTML = pizza_app;

const hello = name => {
    console.log(`Hello ${name}`);
};

hello('Bob');

import {
    randomInRange,
    flipCoin,
    PI
} from './module_a';

console.log(randomInRange(50, 100));
console.log(flipCoin());
console.log(`PI: ${PI}`);

import * as math from './module_b';

console.log(math.add(1,2));
console.log(math.subtract(2,1));

import Zombie from './module_c';

let bob= new Zombie('Bob');

bob.speak();