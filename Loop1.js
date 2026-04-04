// For Of ***************
// array , String


// let arr = [10, 20, 30, 40, 50];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
// }

// for(let i of arr){
//     console.log(i);
    
// }


// let name = "Shivam Sharma";

// for(let ch of name){

//     if(ch === " "){
//         continue;
//     }
//     console.log("Each Character :",ch);
    
// }

// break , Continue

// for(let i = 1; i <= 10; i++){

//      console.log(i);
//     if(i == 5){
//         break;
//     }
    
// }




// for(let i = 1; i <= 10; i++){

   
//     if(i == 5){
//         continue;
//     }
//       console.log(i);
// }




// For In ****************

// used in object 
// key : value

// let obj = {
//     name : "Ram",
//     age : 20,
//     city : "Ayodhya"
// }

// for(let i in obj){
//     // console.log(i);
//     // let element = obj[i];
//     // console.log(element);

//     console.log(i,":->",obj[i]);
// }



// for Each **************

// let arr = [10, 20, 30, 40, 50];

// arr.forEach( (n)=>{
//     console.log(n);
    
// } )


let arr = [
    {
        name:"Ram",
        city : "Ayodhya"
    },

    {
        name : "Shyam",
        city : "Mathura"
    },

    {
        name : "Kalki",
        city : "Sambhal"
    },
];

// for(let i of arr){
//     console.log(i); 
// }


// for(let i in arr){
//      console.log(i);
//     console.log(arr[i]);  
// }


arr.forEach((n)=>{
    console.log(n.name);
    console.log(n.city);
    
    
});

