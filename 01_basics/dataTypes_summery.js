/*
--> JS dynamically typed

Primitive:- 7 types
types:- String, Number, Boolean, null,  undefined, Symbol,BigInt
----> All are call by value. You cant get the reference of the data
        you got only the copy of the data.



Reference(Non-Primitive)
types:- Array, Objects, Function
*/

const id=Symbol("123");
const anotherId=Symbol("123");
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

