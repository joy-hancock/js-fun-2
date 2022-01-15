'use strict'
/* 
let hasDriversLicense = false
const passTest = true

if ( passTest ) hasDriverLicense = true
if (hasDriversLicense) console.log(`I can drive`)

const interface = `Audio`
const private = 534 */
/* 
function logger ()
{
  console.log(`My name is Joy`)
}

//Calling, running, or invoking function
logger() */

/* function fruitProcessor ( apples, oranges )
{
  const juice = `Juice with ${ apples } apples and ${ oranges } oranges.`
  return juice;
}

const appleJuice = fruitProcessor( 5, 0 )
console.log( appleJuice )

const appleOrangeJuice = fruitProcessor( 2, 4 )
console.log( appleOrangeJuice )


const num = Number(`23`)
console.log( num ) */

//Function declaration
/* function calcAge1 ( birthYear ) {
  return 2037-birthYear
}

const age1 = calcAge1( 1991 )
console.log(age1) */

//Function expression
/* const calcAge2 = function( birthYear ) {
  return 2037-birthYear
}
 */


const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3( 1991 )
console.log( age3 )

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  //return retirement;
  return `${ firstName } retires in ${ retirement } years`;
}

console.log( yearsUntilRetirement( 1991, 'Joy' ) )
console.log(yearsUntilRetirement(1950, 'George'))
