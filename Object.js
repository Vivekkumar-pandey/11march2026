// Object *************************

// Key : Value
// {}
// {
//  Key : Value
//  }

/*
let obj = {
    name : "Aman",
    age : 20,
    city : "Noida",
}
*/

// let obj = {
//     name : "Aman",
//     age : 20,
//     city : "Noida"
// }

// console.log(obj);
// console.log(typeof(obj));
// console.log(obj instanceof Object);
// console.log(obj instanceof Array);

// console.log(obj);

// obj.state = "UP";

// obj.city = "Lakhnow"

// obj.name = "Manish";

// // delete obj.city;

//  console.log(obj);

// Object.freeze(obj);

// obj.state = "Delhi";

// obj.city = "East-Delhi"

// obj.name = "Vinay";

//  console.log(obj);


// let car = {
//     name : "Punch",
//     company : "TATA",
//     color : "Blue",
//     price : 11.5,

//     start : function () {
//                 console.log("Start The Car !!");

//              }
// }

// console.log(car);

// console.log(car.name);
// console.log(car.price);
// console.log(car.color);
// console.log(car.company);


// car.start();



// let student = {
//     first_name : "Shivam",
//     lastname : "Sharma",
//     "full name" : "Shivam Sharma",
//     age : 20,
//     city : "Mathura"
// }

// console.log(student);
// console.log(student.first_name);
// console.log(student.fullname); //❌

// console.log(student["full name"]);
// console.log(student["age"]);
// console.log(student["city"]);


// let person = {
//     name : "Aditya",
//     age : 20,
//     address :  {
//                 city : "Noida",
//                 state : "UP",
//                 ZipCode : 123456
//             }
// }

// console.log(person);
// console.log(person.age);
// console.log(person.address.city);


// console.log(person.addres.city);  // ❌

// Optional Chaining ********* (  ?.  )

// console.log(person?.addres?.city); 



// let obj = {
//     name : "Vinay",
//     age : 20,
//     city : "Delhi"
// }

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// for(let i in obj){
//     console.log(i,":->",obj[i]);
// }


// let obj1 = {
//     name: "Aman",
//     age: 20
// }

// let obj2 = {
//     city: "Noida",
//     state: "UP"
// }

// let obj3 = {
//     job: "Developer",
//     salary: 45000
// }

// let obj4 = {
//     job_id: 101,
//     loc_id: 105
// }

// let allObj = {...obj1, ...obj2, ...obj3, ...obj4}

// console.log(allObj);


// let user = {
//     name : "Vinay",
//     age : 20,
//     city : "Delhi"
// }

// // console.log(user);

// let {name, age , city } = user;

// console.log(name);
// console.log(age);
// console.log(city);



// let a = 10;

// // console.log(a);

// let b = a
//  b = b + 5

//  console.log(a);
// console.log(b);


// Deep Cloneing

// let car = {
//     brand : "BMW",
//     color : "Red",
//     price : 12000
// }

// console.log("Car :-> ",car);

// let bike = car;
// bike.speed = 390;

// let json_data = JSON.stringify(car);

// console.log(json_data);  // {"brand":"BMW","color":"Red","price":12000}

// let normal_data = JSON.parse(json_data)

// console.log(normal_data);

// car.power = "120HZ";

// let bike = JSON.parse(JSON.stringify(car));

// bike.speed = 390;

// console.log("Car :-> ",car);
// console.log("Bike :-> ",bike);





