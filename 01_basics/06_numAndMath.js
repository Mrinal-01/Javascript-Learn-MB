// const score=400;
// console.log(score);

// const bal=new Number(400); // Number is an object
// console.log(bal);

// console.log(score.toString())

// //toFixed():- it will fixed no of 0's after the point
// //Lasr digit will be round off
// const no=456.45325
// console.log(no.toFixed(4));

// //toPrecision() :- return precise value
// // 23.89.toPrecision(3) =23.9
// //123.89.toPrecision(3) =124 (round off the value)
// const anyNo=123.89
// console.log(anyNo.toPrecision(4));


// // Return the no with , seperated digit by indian standars
// const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER)






//+++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++
// console.log(Math);

// console.log(Math.abs(-5));

// console.log(Math.round(5.6));

// console.log(Math.ceil(5.3))

// console.log(Math.floor(5.6));

// console.log(Math.PI.toFixed(2))

// console.log(Math.min(2,5,1,75));
// console.log(Math.max(2,5,1,75));


console.log(Math.random());  // value always between 0 and 1

//We multiply by 10 to shift the value
//To avoid 0 we add 1, if we use Math.floor() then it will return 0
console.log((Math.random()*10)+1);

//It will return value 1 to 10
console.log(Math.floor((Math.random()*10)+1));

//Now if u want some value with predefined range
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+min));