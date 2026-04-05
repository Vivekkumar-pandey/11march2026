//  Default Paremeter ********

// function fillForm(name = 'Unknown') {
//     console.log("Form Filled By ",name);

// }

// fillForm('Shivam');

// fillForm();


// Rest Paremeter ************

// ( ... ) 
// Return a Array *****


// function getValue(a, b, c, d, e) {
//     console.log("A : ",a);
//     console.log("B : ",b);
//     console.log("C : ",c);
//     console.log("D : ",d);
//     console.log("E : ",e);
// }


// function getValue(a, b,  ...n) {

//     console.log("A : ",a);
//     console.log("B : ",b);

//     console.log(n);

// }

// getValue(10, 20, 30, 40, 50);


// Callback ****************

// function greet(name) {
//     console.log('This Is greet Function');
//     console.log("Good Morning", name);

// }

// function saySomething(n) {
//     a = 'Aditya';
//     console.log('This Is saySomething Function');
//     // console.log(n);
//     n(a);

// }

// greet('shivam');
// saySomething()

// greet('Mohan');

// saySomething(greet);


// HOF **************

// callbacks are higher order
// hof return a function



// function getData(a) {
//     console.log("ID Is : ",a);
// }

// function fetchData(b) {
//     let id = 101;
//     b(id);
// }

// fetchData(getData);


// return function *******

function getDouble(num1) {
    return function (num2) {
                return num1 * num2;
                }
}

// let result1 = getDouble(12);
// console.log(result1);
// let result2 =  result1(10);
// console.log(result2);


// let result1 = getDouble(7);
// console.log(result1(11));


// let result = getDouble(5)(9);
// console.log(result);


// console.log(getDouble(17)(3));




