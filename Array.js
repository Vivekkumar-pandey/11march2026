// let arr = [1, 2, 3, 4, 5, "Ram", "Radha"];

// console.table(arr);

// console.log(arr[5]);

// console.log(arr[0]);

// console.log(arr[7]);

// console.log(arr.length);

//  i < arr.length;

// for(let i = 0; i <= arr.length-1; i++){
//     console.log(arr[i]);
// }

// let str = "Shivam Sharma";

// console.log(str.length);


// of ******

// for(let i of arr){
//     console.log(i);  
// }


// arr.forEach( (n)=>{
//     console.log(n);
// } )


//  arr.forEach( (n)=>{
//    console.log(n);
// } )


// ******************************************************************
/*

    filter 
    map
    reduce

*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(typeof(arr));

// console.log(arr instanceof Array);

// console.log(arr instanceof Object);

// let result = arr.filter( (n)=>{
//     return n >= 5;
// })

// console.log(result);


// let result = arr.filter( n =>  n >= 5 )

// console.log(result);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = arr.map( (n)=>{ return n*5 } )

// console.log(result);

// task ***********

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// even = [2, 4, 6, 8]
// odd = [1, 3, 5, 7, 9]

// let even = arr.filter( (n)=>{ return n % 2 === 0});

// let odd = arr.filter( (n)=>{ return n % 2 !== 0});

// console.log(even);
// console.log(odd);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     // sum = sum + arr[i];
//      sum += arr[i];
// }

// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = arr.reduce( (a, b) =>{
//     return a + b;
// }, 0 )

// console.log(sum);

/*

a + b
0 + 1 = 1  a = 1
1 + 2 = 3  a = 3
3 + 3 = 6  a = 6
6 + 4 = 10 a = 10
10 + 5 = 15 a = 15 

*/

// let arr = [10, 20, 30, 40, 50];

// console.log(arr[1]);

// console.log(arr.indexOf(30));

// console.log(arr.lastIndexOf(30));

// console.log(arr);

// arr.push(60);
// arr.pop();

// arr.unshift(5);
// arr.shift();

// arr[3] = "Mohan";

// console.log(arr);


// let arr = [1, 2, [10, 20, [100, 200, [1000, 2000, [10000, [10000, 200000] , 20000] , 3000, 4000] , 300, 400] , 30, 40] , 3, 4];

// console.log(arr);

// console.log(arr.flat());
// console.log(arr.flat(2));

// console.log(arr.flat(Infinity));



// let arr = [10, 20, 30, 40, 50];

// // console.log(arr.reverse());

// for(let i = arr.length-1; i >=0 ; i--){
//     console.log(arr[i]);
    
// }


// let name = ["Sumit", "Priyanka", "Sonu", "Manish", "Zesu" , "Shivam", "Ayash"];

// console.log(name.sort());

// let num = [11, 45, 55, 3, 78, 2, 4];

// // let sorted = num.sort((a, b) => a - b);

// let sorted = num.sort((a, b) => b - a);

// console.log(sorted);


// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

// // let result = arr.some((n)=> n >= 9 );

// let result = arr.every((n)=> n >= 2 );

// console.log(result);

// Another Methods Of Array *********


// Slice / Splice ********

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let newArray = arr.slice(2 , 4);

// console.log(newArray);

// console.log(arr);


// Splice ******

// Delete ********

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let newarr = arr.splice(2, 4);

// console.log(newarr);

// console.log(arr);


// Insert **********

//  let arr = [10, 20, 30, 40, 50];
//  arr.splice(2, 1, "Ram");
//  arr.splice(2, 2 , "Ram", "Shyam");

// console.log(arr.indexOf(40));

// arr.splice(4, 0 , "Manmohan");

// console.log(arr);


// let arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr);
// console.log(arr.length);


// let arr = new Array (10, 20, 30, 40, 50);
// console.log(arr);
// console.log(arr.length);


// let arr = new Array(5);
// console.log(arr);
// console.log(arr.length);  // 5



// let arr = Array.of(5);
// console.log(arr);
// console.log(arr.length);  // 1


// let arr = Array.from("Shivam");
// console.log(arr);
// console.log(arr.length);


// let arr = [1, 2, 3, 4, 5];
// let str = arr.join(" , ");
// console.log(str);
// console.log(typeof(str));


// let arr = [1, 2, 3, 4, 5];

// let str = arr.toString();

// console.log(str);
// console.log(typeof(str));



// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1.length);



// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let copyarr = arr1.concat(arr2);
// console.log(copyarr);




// Spread Operator (...)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// let arr4 = [10, 11, 12];

// let newarr = [...arr1, ...arr2, ...arr3, ...arr4];
// console.log(newarr);


// let arr = new Array(5);
// arr.fill(0);

// let arr = new Array(5).fill(0);
// console.log(arr);
// console.log(arr.length);



// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof(arr));
// console.log(arr instanceof Array);



// console.log(arr.indexOf(30));

// console.log(arr.includes(30));
// console.log(arr.includes(70));



// let arr = [10, 20, 30, 40, 50];
// let getData = arr.find( n => n > 15);
// console.log(getData);


// let arr = [10, 20, 30, 40, 50];
// let getIndex = arr.findIndex( n => n > 20);
// console.log(getIndex);



let arr = [ 1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6 ];

console.log(arr);
console.log(arr.length);


let unique = [...new Set(arr)]

console.log(unique);
console.log(unique.length);


// Find Unique By Loop
// Find Biggest Element Of Array
// Find Smallest Element Of Array
// Find Sum Of Elements Of Array

/*
 Find index of 6 using loop (Linear Search)
    
    arr = [2, 3, 7, 8, 6 , 9 , 17, 19]
*/


















