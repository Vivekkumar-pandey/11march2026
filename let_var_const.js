// ***********************************************

// Var ***********

/*

Decleration ✅
Initilization ✅
Initilization & Decleration ✅
Re-initilization ✅
Re-decleration ✅

*/

/*
var a;  // decleration
a = 10;  // initilization
var c = 30 // Initilization & Decleration ✅
var a = 20; // decleration
a = 30   // Re-initilization
*/

// a = "ABC";

// console.log(a);
// console.log(typeof(a));

// var password = 12345;

// console.log(password);


// var password = 56789;

// password = 89012;

// console.log(password);


// let ************************

/*

Initilization ✅
Decleration ✅
Initilization & Decleration ✅
Re-initilization ✅
Re-decleration ❌

*/

// let password;  // Decleration ✅

// password = 12345;  // Initilization ✅

// let password = 12345; // Initilization & Decleration ✅

// password = 56789;  // Re-Initilization ✅

// let password  // Re-decleration ❌

// console.log(password);


// const ************************

/*
Decleration ❌
Initilization ❌
Initilization & Decleration ✅
Re-initilization ❌
Re-decleration ❌

*/


// const password; // Decleration ❌
// password = 12345; // Initilization ❌

// const password = 12345; // Initilization & Decleration ✅
 
// password = 56789; // Re-initilization ❌

//  const password = 56789; // Re-decleration ❌

// console.log(password);



// Scope    { }


// var ********************

/*
block-scope ❌
functional ✅
*/

// // global **
// var a = 10;
// console.log("Global Of A (Outside Block) : ",a);
//  // scope-block **
// {
//     // local **
//     var b = 20;
//     console.log("Global Of A (Inside Block) : ",a);
//     console.log("Local Of B (Inside Block): ",b);
// }


//  console.log("Local Of B (Outside Block): ",b);


//  // functional scope **

// function greet() {
//     var a = 10;
//     console.log("A Inside Function : ",a);
    
// }

// greet();   // ✅

// console.log("A Outside Function : ",a);   // ❌



// // let ********************

// /*
// block-scope ✅
// functional ✅
// */

// // local **
// let a = 10;
// console.log("Global Of A (Outside Block) : ",a);

// // scope-block **
// {
//     // local **
//     let b = 20;
//     console.log("Global Of A (Inside Block) : ",a);
//     console.log("Local Of B (Inside Block): ",b);
// }

//  console.log("Local Of B (Outside Block): ",b);  // ❌


// // functional scope **

// function greet() {
//     let a = 10;
//     console.log("A Inside Function : ",a);
    
// }

// greet();

// console.log("A Outside Function : ",a);   // ❌



// // const ********************

// /*
// block-scope ✅
// functional ✅
// */

// // local **
// const a = 10;
// console.log("Global Of A (Outside Block) : ",a);

// // scope-block **
// {
//     // local **
//     const b = 20;
//     console.log("Global Of A (Inside Block) : ",a);
//     console.log("Local Of B (Inside Block): ",b);
// }

//  console.log("Local Of B (Outside Block): ",b);  // ❌


// // functional scope **

// function greet() {
//     const a = 10;
//     console.log("A Inside Function : ",a);
    
// }

// greet();

// console.log("A Outside Function : ",a);   // ❌



// Hosting *****************

// var a;

// console.log(a);

// var a = 10;
// let a = 10;

// greet();  // Good Morning

// function greet() {
//     console.log("Good Morning");
    
// }

// greet(); // Good Morning

// // Function Expression *****  

// greet();  // ❌

// var greet = function() {
//     console.log("Good Morning");
    
// }

// greet(); // Good Morning


// // TDZ **********************************

// console.log(a);

// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");
// console.log("Hello 4");
// console.log("Hello 5");

// const a = 10;

