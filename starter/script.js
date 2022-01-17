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


/* const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3( 1991 )
console.log( age3 )

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  //return retirement;
  return `${ firstName } retires in ${ retirement } years`;
}
 */
/* console.log( yearsUntilRetirement( 1991, 'Joy' ) )
console.log(yearsUntilRetirement(1950, 'George')) */

//! Need to cut fruit into multiple pieces before putting into food processor. */

//!2 from console.log is 8 for apples because of fruitProcessor paramenter 2 replaces apples in function, then 2 replaces apples in applePieces, then it replaces fruit in function at cutPieces, making 2*4 = 8

/* const cutPieces=function( fruit ) {
  return fruit * 4
}

const fruitProcessor = function( apples, oranges ) {
  const applePieces = cutPieces( apples )
  const orangePieces = cutPieces(oranges)
  
  const juice = `Juice with ${ applePieces } pieces of apple and ${ orangePieces } pieces of orange.`
  return juice;
}

console.log( fruitProcessor( 2, 3 ) ) */

//! Below are two functions with the same parameter names, but they are not the same thing.

/* const calcAge = function ( birthYear ) {
  return 2037- birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age
  
  if ( retirement > 0 ) {
    console.log (`${firstName} retires in ${retirement} years`)
    return retirement;
  } else {
    console.log(`${firstName } has already retired`)
    return -1;
  }
  
  //return retirement;
  //return `${ firstName } retires in ${ retirement } years`;
}

console.log( yearsUntilRetirement( 1950, 'Joy' ) )
console.log( yearsUntilRetirement(2001,'Tim' ) ); */
