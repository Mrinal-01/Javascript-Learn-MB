const name="Mrinal"
const roll=3504;
console.log(`My name is ${name} and roll:${roll}`);

//Here actually wee are creating string object
//All the char store in key-value pair
//{0:'P',1:'o' .....}
const gameName=new String("Pockemon-go");
console.log(gameName);

console.log(gameName[0])

console.log(gameName.length);

console.log(gameName.charAt(7)); // in 7th position n
console.log(gameName.indexOf('P'));
const newStr=gameName.substring(0,4); //0 to 3 not 4
console.log(newStr);

// slice method work like substring but diff is it accept -ve values

console.log(gameName.slice(-11,-4));

 //It will remove all the spaces 
 const str="   Mrinal     "
 console.log(str);
 console.log(str.trim());


 const url="https://mrinal.com/mrina%20bera"
 console.log(url.replace('%20','-'));

 //includes() :- if u want to find some words
 //return true if found or false
 console.log(url.includes('mri'));


 //split():- split a string to array based on some seperator
 const str1='Hello-mrinal-how-u-doing'
 //const str2=str1.split('-');
 const str2=str1.split('');
 console.log(str2);


 //subStr(): its a legacy method
 //Its accept 2nd para as length
 console.log(str1.substr(2,5))