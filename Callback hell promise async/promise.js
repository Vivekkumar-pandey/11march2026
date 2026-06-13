// Promise ***************
/*
    -> A Promise is an object that respresents future completions or failure of any async tasks .

        There are three states 
        -> (i) Pending  - Work in progress / Running
        -> (ii) Fulfilled - Task Completion / Sucess
        -> (iii) Rejected - Task Failed / Failure

        -> Promise Is a keyword
        -> Two Parameter (resolve , reject)
        -> .then() -> for resolve
        -> .catch() -> for reject
        -> .finally -> always executes


        var_name().then((result) => console.log(result) )
            .catch((error) => console.log(error) )


            -> Promise Internally stores :-
            -> state
            -> result(value / error)

            -> We cannot accesses directly that's why we are using .then or .catch

            then execute when promise resolved
            catch execute when promise rejected



*/


// Promise ******************


// let p = new Promise( (resolve, reject) =>{
//     let sucess = true;

//     if(sucess){
//         resolve("Sucesfull !!");

//     }else{
//         reject("Failed !!");

//     }
// } )


// console.log(p);



// function fetchData() {

//     return new Promise((resolve, reject) => {

//            let sucess = true;
//         // let sucess = false;

//         if (sucess) {
//             resolve("Sucesfull !!");

//         } else {
//             reject("Failed !!");

//         }
//     })

// }

// // fetchData();

// console.log(fetchData());

// fetchData().then( result => console.log(result))
//     .catch( error => console.log(erroe));




// function fetchData() {

//     return new Promise((resolve, reject) => {
//         // let sucess = true;

//         setTimeout ( ()=> {
//         // let sucess = true;
//          let sucess = false;

//         if (sucess) {
//             resolve("Sucesfull !!");

//         } else {
//             reject("Failed !!");

//         }
//         },2000 )
//     });

// }


// let p = fetchData()
// console.log(p);


// fetchData().then( (result)=> console.log(result))
//     .catch((error) => console.log(error));





// let p = new Promise((resolve, reject) => {

//         // let sucess = true;
//         let sucess = false;

//         if (sucess) {
//             resolve('Data Fetch Sucessfully !!')
//         } else {
//             reject('Failed To Load Data !!')
//         }

//     })

//     console.log(p);
//     p.then(result => console.log(result))
//     .catch(error => console.log(error));








    
 











