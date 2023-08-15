/*
Stack(Primitive)   Heap(non-primitive)

*/ 
let myName="Mirnal"
let anotherName=myName;
anotherName="Bittu";
console.log(myName);
console.log(anotherName);

let userOne={
    email: "mbera829@gmail.com",
    upi:"mbera@oksbi"
}
let userTwo=userOne;
console.log(userTwo.email);
userTwo.email="mrinal.bera@infosys.com"
console.log(userOne.email);
console.log(userTwo.email);
// You can see both the value changed as both reference to same object