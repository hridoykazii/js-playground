// Javascript variable can hold 8 types of data 
// 7 Premetive data type and 1 object data type 

// The object data type can hold many different of objects  
/*
    Objects are :::
    1. Object
    2. Array
    3. Funtion
    4. Date
    5. RegExp
    6. Set
    7. Map
*/

/* 

Premetive Data type are 2 differnt 1- Numeric type, 2 - Non Numeric type
Numeric Type: Number, Big Intiger 
Non Numberic type: string, boolean, null, undefine, symbol 
*/

const length = 3242;
const weight = '3kg';
const isLoggedIn = false;
const id = 279500008742395872938574927834598273n;
let behavior;
let symbol = Symbol();
console.log(typeof length, typeof weight, typeof isLoggedIn, typeof id, typeof behavior, typeof symbol);

const toString = length.toString();
console.log('number convert to string:::', typeof toString);
const fruits = ['Apple', 'banana', 'mango'];
console.log('array::: to string ', typeof fruits.toString());

// Objects ::::::

const student = {
    name: 'John',
    class: 7,
    roll: 1,
}
const todayDate = new Date();
console.log('objects:::', typeof student, typeof todayDate);

// NaN = Not A Number 

const checkValue = 50 / "apple"
console.log('not a number ::::', checkValue);

//  type coersion

const typeCoersion = '5' + '2'; console.log('Data typeCoersion::: ',typeCoersion);

// Type Conversion 
const strToNumber = "John";
console.log('string to number::', typeof Number(strToNumber));

/* 
    string 33 to number = comes type of number
*/
const findBoolean = 'john';
console.log(typeof Boolean(findBoolean));

// Type Destructuring 
const employee = 
{
    name: 'john',
    age: 30,
    phone: '01973879879'
}
const {name, age, location = 'dhaka'} = employee;
console.log(name, age, location);


