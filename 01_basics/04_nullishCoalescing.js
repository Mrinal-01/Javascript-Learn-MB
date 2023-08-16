/*The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.

In other words, ?? returns the 
first argument if it’s not null/undefined. 
*/
let user;
console.log(user??"Undefined");

let user1="null"
console.log(user1??"null");

let user2="Mrinal";
console.log(user2??"Anonymous");


//You can use multiple nullish coalescing operator
//It will retun 1st defained value otherwise return
//last null/undefined value

// let u1=null, u2=undefined, u3="Mohon";
// console.log(u1??u2??u3);  //Return Mohon

let u1=undefined, u2=undefined, u3=null;
console.log(u1??u2??u3);


/*
Diff || and ??:- 
|| does not distinguish between false,0,"",null, undefined
all are false value
But in ?? only null/undefiend treat as false value.
Look below example:-
*/
let height=0;
console.log(height||100);    //100 as 0 is false
console.log(height??100);   //0  as 0is not undefined/null