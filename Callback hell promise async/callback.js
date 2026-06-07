// function ****************

// function greet(name) {
//     console.log("Good Morning ",name);

// }

// greet("Shivam");



// callback function ****************


// function greet(name) {
//     console.log("Greet Function");
//     console.log("Good Morning ",name);
// }

// function saySomething(n) {
//     let a = "Shivam Sharma";
//  console.log("Say Something Function");
// //  console.log(n);
// n(a);

// }

// saySomething(greet);


// Async function ************

// console.log("Start");

// setTimeout(()=>{
//     console.log("After sometimes Processed Data , Hello");

// },5000);

// console.log("End");



//  Write table of 2 **********

// let n = 2;

// for(let i = 1; i <= 10; i++){
//     setTimeout( ()=>{
//         console.log(n,"X",i,"=",i*n);

//     },i*1000);
// }




//  CallBack Hell *****************
//  Nexted Callbacks **************


// console.log("Task - 1 Start ...");

// setTimeout(() => {
//     console.log("Task 1 Done !!");

//     console.log("Task - 2 Start ...");

//     setTimeout(() => {
//         console.log("Task 2 Done !!");

//         console.log("Task - 3 Start ...");

//         setTimeout(() => {
//             console.log("Task 3 Done !!");

//             console.log("Task - 4 Start ...");

//             setTimeout(() => {
//                 console.log("Task 4 Done !!");

//                 console.log("Task - 5 Start ...");

//                 setTimeout(() => {
//                     console.log("Task 5 Done !!");

//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);


//  Callback Hell ************
/*
-> When Callback are nested inside callback agian and again .
-> Hard To Read.
-> Hard To Debug.
-> Hard To Maintain.
-> Ugly Code.

// This is Pyrimid like Structure  is known as Pyrimid of Doom .

*/

function getData(data_id, upcoming_data) {

    setTimeout(() => {
        console.log("Data Id Is : ", data_id);

        if (upcoming_data) {
            upcoming_data();
        }

    }, 2000);

}

// getData(101, ()=>{
//     getData(102);
// });




//  Nested Callback => Callback Hell


console.log("Calculating Data - 1 : ...");

getData(101, () => {
    console.log("Calculating Data - 2 : ...");

    getData(102, () => {
        console.log("Calculating Data - 3 : ...");

        getData(103, () => {
            console.log("Calculating Data - 4 : ...");

            getData(104, () => {
                console.log("Calculating Data - 5 : ...");

                getData(105);

            });
        });
    });
});



