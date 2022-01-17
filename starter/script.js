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

/* const friends = [ 'Michael', 'Steven', 'Peter' ]

const years = new Array( 1991, 1984, 2008, 2020 );
 */
/* console.log( friends[ 0 ] )

console.log( friends[ 2 ] );
console.log( friends.length ) */

//!Find the last item in the array.  Javascript expects an expression in brackets, not a statement. Arrays are NOT immutable, so you can change variables, even if you use const.  However, you cannot change entire array.

/* console.log(friends[friends.length-1])

friends[ 2 ] = 'Jay'
console.log(friends) */

/* const firstName='Jonas'
const jonas = [ 'firstName', 'Schmedtmann', 2037 - 1991, 'teacher', friends ];

console.log( jonas );
console.log(jonas.length) */


//Exercise

/* const calcAge = function ( birthYear ) {
  return 2037 - birthYear;
}
const years = [ 1990, 1967, 2002, 2010, 2018 ];

const age1 = calcAge( years[ 0 ] )
const age2 = calcAge( years[ 1 ] );
const age3 = calcAge( years[ years.length-1])
console.log( age1, age2, age3 );

//The array below calls the calcAge function multiple times to create a new array

const ages = [ calcAge( years[ 0 ] ), calcAge( years[ 1 ] ), calcAge( years[ years.length - 1 ] ) ];

console.log(ages) */

//const friends = [ 'Michael', 'Steven', 'Peter' ]

//Push is a method, meaning that it is a function. This means that it can also return a value.
/* const newLength=friends.push( 'Jay' );
console.log( friends )
console.log( newLength )

friends.unshift( 'John' );
console.log( friends ); */


//Remove elements from the friends array
/* 
friends.pop();
const popped = friends.pop();
console.log( popped )
console.log( friends );

friends.shift();
console.log(friends)

console.log( friends.indexOf( 'Steven' ) )
console.log( friends.indexOf( 'Bob' ) )


friends.push( 23 );
console.log( friends.includes( 'Bob' ) )
console.log( friends.includes( 'Steven' ) )
console.log( friends.includes( '23' ) );
console.log( friends.includes( 23 ) );

if ( friends.includes( 'Peter' ) ) {
  console.log('You have a friend named Peter')
}
else {
  console.log('You do not have a friend named Peter')
}
 */

/* const joy = {
  firstName: 'Joy',
  lastName: 'Hancock',
  age: 41,
  job: 'programmer',
  friends: [ 'Tim', 'Petra', 'Baxter', 'Business Horse' ]
};

console.log( joy ); */

//Dot is an operator that calls on the object
//With brackets we can use an operation to find variable that we need, not possible with dot.
/* console.log( joy.lastName );
console.log( joy[ 'lastName' ] );
 */
//In bracket notation, we can use a computed property name (below)
/* const nameKey = 'Name';
console.log(joy['first' + nameKey])
console.log(joy['last' + nameKey])

const interestedIn = prompt( 'What do you want to know about Joy? Choose between firstName, lastName, age, job, and friends.' );
console.log( interestedIn );

if ( joy[ interestedIn ] ) {
  console.log( joy[ interestedIn ] );
} else {
  prompt(`Wrong request! Choose between firstName, lastName, age, job, and friends.`)
}

joy.location = 'Florida';
joy[ 'twitter' ] = '@joy_hancock'
console.log( joy ) */

//Challenge for
//Joy has three friends, and her best friend is Bongo.

/* const joy = {
  firstName:'Joy',
  bestFriend: 'Bongo',
  friends:['Bongo','Tim','Business Horse'],
}

console.log(`${joy.firstName} has ${joy.friends.length} friends, and her best friend is ${joy.friends[0]}.`)  */

 /* const joy = {
  firstName: 'Joy',
  lastName: 'Hancock',
  birthYear:1979,
  job: 'programmer',
   friends: [ 'Tim', 'Petra', 'Baxter', 'Business Horse' ],
  hasDriversLicense: true,
  calcAge: function () {
     this.age = 2022 - this.birthYear;
     return this.age;
   },
  getSummary: function () {
     return`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has ${this.hasDriversLicense ? 'a':'does not have a'} driver's license.`
  }
}  

console.log( joy.calcAge() );
console.log(joy.getSummary()) */
  
   /* canDrive: function () {
     if ( this.licensed = this.hasDriversLicense ) {
       this.licensed = `has a driver's license.`
     }
     else {
       this.licensed = `does not have a driver's license.`
     }
   } */
  
   /* calcAge: function () {
    //console.log(this)
    return 2037 - this.birthYear;
  } */
  
   


//console.log( joy.age )

//console.log(joy.canDrive())

//console.log(joy.licensed)

//Challenge
//Joy is a 58 year-old programmer, and she has a driver's license.

/* console.log(` ${ joy.firstName } is a ${joy.age} year-old ${joy.job}, and she ${joy.licensed}`) */
