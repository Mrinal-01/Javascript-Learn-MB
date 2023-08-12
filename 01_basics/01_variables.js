const accountId=144553;  //
let accountEmail="mbera829@gmail.com";
var accountPassword="12345";
accountCity="Kolkata";

/*
If you just decalre a variable but dont assign a value
and you print the variable op will be undefined
*/
let accountState;

// accountId=2;  :- Assignment to constant variable not allowed.

console.log(accountId)
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//This one will display all the details in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);


/*
    Prefer not to use var because of 
    issue in block scope and functional scope
*/