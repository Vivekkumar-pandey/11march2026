// ********************* Loops *****************************


// console.log("Hello Js 1");
// console.log("Hello Js 2");
// console.log("Hello Js 3");
// console.log("Hello Js 4");
// console.log("Hello Js 5");

// for **************

// for(let i = 1; i <= 100 ; i ++){
//      console.log("Hello Js ",i);
// }

// Print natural number to 100 *****

// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }


// n(n+1) / 2
// 1 to 5 
// 1 + 2 + 3 + 4 + 5 = 15
// 5(5+1) / 2 => 5*6 / 2 => 30 / 2 = 15

// 100 
// 100(100 + 1) / 2 = 100*101 / 2 = 10100 / 2 = 5050


// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
//  console.log(sum);

/*

 2 X 1 = 2
 2 X 2 = 4
 2 X 3 = 6
 2 X 4 = 8
 2 X 5 = 10
 2 X 6 = 12
 2 X 7 = 14
 2 X 8 = 16
 2 X 9 = 18
 2 X 10 = 20

*/

// let n = 12;

// for(let i = 1; i <= 10; i++){
//     console.log(n,"X",i,"=",(n*i));

// }

// factorial 

// let n = 7;
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact = fact * i;
// }
// console.log(fact);



// while *********

// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }


// let fact = 1;
// let i = 1;
// while(i <= 5){
//     fact = fact * i;
//     i++;
// }

// console.log(fact);


// let sum = 0;
// let i = 1;
// while(i <= 5){
//     sum = sum + i;
//     i++;
// }

// console.log(sum);

//count digit *****

// let count = 0;
// let n = 123;

// while (n > 0) {
//     count++;
//     // console.log(n);

//     n = Math.floor(n / 10);
// }

// console.log('Total Digits Are : ',count);


// last Digit *****

// let n = 123;

// while (n > 0) {

//     let rem = n % 10;
//     console.log("Last Digit Is :",rem);
//     n = Math.floor(n / 10);
// }

// Reverse *****

// let n = 12345;
// let rev = 0;
// while (n > 0) {

//     let rem = n % 10;
//    rev = (rev*10) + rem;
//     n = Math.floor(n / 10);
// }

// console.log('Reverse Is :' , rev);


// Palindrome Number *****

let n = 12321;
let temp = n;
let rev = 0;
while (n > 0) {

    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n / 10);
}

console.log("Orignal Number Is:", temp);
console.log('Reverse Is :', rev);

if (rev === temp) {
    console.log(temp, 'Is a Pallindrome Number !!');

}
else {
    console.log(temp, 'Is Not a Pallindrome Number !!');
}

// do while *****



// let x = 7;
// while(x <= 5){
//     console.log(x);
//     x++;
// }
// console.log("While 👆 Do-While 👇");

// let i = 7;
// do{
//     console.log(i);
//     i++
// }while(i <= 5);

// run at least once . 

