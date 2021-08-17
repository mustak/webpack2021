import test1 from './module1';
import './assets/styles/index.css';

const myObj1 = {
    ...test1,
    prop1: 'test prop1',
    prop2: 'test prop2',
};
const myObj2 = {
    ...myObj1,
    prop1: 'test prop1',
    prop2: 'test prop2',
};

console.log(myObj1);
console.log(myObj2);
