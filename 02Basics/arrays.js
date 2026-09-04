// const cars = ['saab', 'volvo', 'bmw']
// console.log(cars[0]);

// const cars =[];
// cars[0]='saab',
// cars[1]='volvo',
// cars[2]='bmw'
// console.log(cars);

// **** Changing Array Element
// const cars = ['saab', 'volvo', 'bmw'];
// cars[0]='toyota';
// console.log(cars);

// ***** Converting Array to String

// const cars = ['saab', 'volvo', 'bmw'];
// const carsArrayToString = cars.toString();
// console.log(carsArrayToString);

// *** Displaying An Array using json
// const cars = ['saab', 'volvo', 'bmw'];
// const arrayToJson = JSON.stringify(cars);
// console.log(typeof(arrayToJson));
// console.log(cars.length);
// console.log(cars.sort());

// **** Accessing the last Array Element
// const cars = ['saab', 'volvo', 'bmw'];
// const lastArray = cars[cars.length - 1];
// console.log(lastArray);

// *** Adding Array Element

// const carsClassic = ['saab', 'volvo', 'bmw'];
// const newCars = cars.push('toyota');
// console.log(cars);
// const carsRacing = ['Audi','Ferrari', 'Ford'];
// const cars = carsClassic.push(carsRacing);
// console.log(carsClassic);

// *** new Array

// const points = new Array(40);
// console.log(points);

// const cars = ['saab', 'volvo', 'bmw'];
// cars.length = 44; // array length set kora jaba 
// console.log(cars.length);

// Join Array
// const cars = ['saab', 'volvo', 'bmw'];
// const joinCars = cars.join('-');
// console.log(joinCars);
// console.log('typeof', typeof(joinCars));

// ** flatting array - multidimentional array k ekta array te convert kore flat method diye
// const multidimentionalArrays = [[1,2,[4,3]]];
// console.log(multidimentionalArrays.flat(100));
// flatMap method () - 
// const myArray = [1,2,3,4];
// const newArray= myArray.flatMap(x => [x, x*10]);
// console.log(newArray);
// const myName = ["my name is",['hridoy']];
// const myFlatName = myName.flat();
// const newNameArray = myFlatName.flatMap(x=> x.split(" "));
// console.log(newNameArray);

// **** Splice 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruits = fruits.splice(1,1);
// console.log(newFruits);
// ***** toSplice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruits = fruits.toSpliced(0,1);
// console.log(newFruits);

// **** slice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruits = fruits.slice(0,2);
// console.log(newFruits);









