
// let a = 'Ram';

// let a = 14;

// let a = 14.5;

// let a = 10n;

// let a = true;

// let a;

// let a = null

// console.log(typeof(null));

// console.log(2 * 'abc');

// let id1 = Symbol(101);
// let id2 = Symbol(101);


// let id1 = Symbol(101);
// let id2 = Symbol(101);

// console.log(id1 == id2);


// console.log(typeof(id));


// console.log(typeof(undefined));

// console.log(typeof(null));


// function greet() {
//     console.log('Good Morning');
    
// }

// console.log(typeof(greet));


// let arr = [10, 20, 30, 40, 50];

// console.log(arr[0]);

// console.log(typeof(arr));

// console.log(arr instanceof(Array));

// console.log(arr instanceof(Object));


// let obj = {
//     name : "Shivam",
//     age : 20,
//     city : 'Mathura'
// }

// console.log(obj);
// console.log(typeof(obj));

// console.log(obj instanceof(Object));



// let a = 10;

// let b = a;

// b = b + 30;

// console.log(a);
// console.log(b);



// let car = {
//     name:"BMW",
//     color : "Blue"
// }

// let bike = car;

// bike.speed = 180;

// console.log("Car : ",car);
// console.log("Bike : ",bike);


// Deep Cloning ****************************

let car = {
    name :"BMW",
    color : "Blue"
}

// let json_data = JSON.stringify(car);

// let normal_data = JSON.parse(json_data);

// let bike = JSON.parse(json_data);

let bike = JSON.parse(JSON.stringify(car));

// console.log(car);
// console.log(json_data);

// console.log(normal_data);


bike.speed = 180;

console.log("Car : ",car);
console.log("Bike : ",bike);
