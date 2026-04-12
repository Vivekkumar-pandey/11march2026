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



