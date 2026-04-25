// ******************************

// let obj1 = {
//     name : "Aman",
//     age : 20
// }

// let obj2 = {
//     city : "Noida",
//     State : "UP"
// }


// let newArr = Object.assign({}, obj1, obj2);

// console.log(newArr);

// let obj = {
//     name : "Shivam",
//     age : 20,
//     city : "Delhi"
// }

// console.log(obj.hasOwnProperty("name"));

// let {name, age, city} = obj;

// console.log(name);
// console.log(age);
// console.log(city);


// constructor function ************

// function person (name, age) {
//     this.name = name;
//     this.age = age;

//     console.log("My Name Is ",name," Age Is ",age);


// }

// let p1 = new person("Shivam", 20);

// console.log(p1);



// class Student {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }

//     greet() {
//         console.log(`My Name Is ${this.name} and my age is ${this.age}`);

//     }
// }

// let s1 = new Student("Shivam", 20);

// // console.log(s1);
// s1.greet();


// Parent ***************

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    sound() {
        console.log("Animal Make Sound !!");
    }

    eat() {
        console.log("Animal Eats !!");
    }
}

// child *********

class Dog extends Animal {

    sound() {
        console.log(`Dog Name Is ${this.name} Barks Too Loud !!`);
    }

    eat() {
        console.log(`The ${this.color} Dog Eats Bone Only 🦴🐕`);
    }
}


class Cat extends Animal {

    sound() {
        console.log(`Cat Name Is ${this.name} Make Sound Meow-Meow !!`);
    }

    eat() {
        console.log(`The ${this.color} Cat Eats Fish Only 🐟🎣🐈‍⬛🐈🐱`);
    }
}

let a1 = new Animal();
a1.sound();
a1.eat();

let d1 = new Dog("Tommy", "Black");
d1.sound();
d1.eat();

let c1 = new Cat("Kitty", "Gray");
c1.sound();
c1.eat();

