const READLINE = require('readline-sync');
//let userInput = READLINE.question("Type anything and I'll repeat it back!");
//console.log(userInput);


// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for

let numOfPennies = READLINE.question("Please cents as a positive integer");

console.log(numOfPennies);



// declare, assign, and print how many quarters you can make out of the pennies
let quarters = Math.floor(numOfPennies/25)

console.log(quarters,"QUARTERS");




// declare, assign, and print how many dimes you can make out of the pennies





// declare, assign, and print how many nickels you can make out of the pennies





// declare, assign, and print how many pennies are left over





// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct
