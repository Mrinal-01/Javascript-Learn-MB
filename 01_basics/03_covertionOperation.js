// //Always during convertion it start wit capital letter
// //like, Number("33")  String(33)  Boolean(12)

// let score="33";
// console.log(typeof score);
// console.log(typeof(score));

// let valueNum=Number(score);
// console.log(typeof valueNum);
// console.log(valueNum);


// //When return NaN :- When u try to return a number with 
// //some string value or when a no is not a no
// let num="21a";
// console.log(typeof num);

// let notNum=Number(num);
// console.log(typeof notNum);
// console.log(notNum);

// /*
// null is an object. So empty string '', false , 
// null and all falsy values become 0. Similarly,
//  Number(true) will return 1. Number('some string') 
//  will be NaN as 'some string'
//  cannot be converted to a number.
// */
// // let num1=null;   //return 0
// // let num1=undefined;  //return NaN
// let num1=true;

// console.log(typeof num1);

// let notNum1=Number(num1);
// console.log(typeof notNum1);
// console.log(notNum1);

// /*
// NOTE:- "33"=>33
//         "33ab" =>NaN
//         null=> 0
//         undefined => NaN
//         true => 1 false=> 0
// */

// //let isLoggedIn=1; //true
// // let isLoggedIn="";  //false
// // let isLoggedIn="Mrinal";    //true
// // let isLoggedIn=null;        //false
// let isLoggedIn=undefined;       //false
// let booleanVal=Boolean(isLoggedIn);
// console.log(booleanVal);



console.log("1"+2);         //12
console.log(1+"2");         //12
console.log("1"+2+3)        //123
console.log(1+1+"2");       //22


console.log(+true);