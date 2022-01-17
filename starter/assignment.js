/* 
const calcAverage = (a,b,c) => (a+b+c) / 3 

const dolphinsAvg = calcAverage( 44 + 23 + 71 )
const koalasAvg = calcAverage( 65 + 54 + 49 )

const checkWinners = function ( dolphinsAvg, koalasAvg ) {
  
  if ( dolphinsAvg >= 2 * koalasAvg ) {
    console.log( `Dolphins win ${ dolphinsAvg } vs ${ koalasAvg }` )
    return dolphinsAvg
    
  } else if ( koalasAvg >= 2 * dolphinsAvg ) {
    console.log( `Koalas win ${ koalasAvg } vs ${ dolphinsAvg }` )
    return koalasAvg
  } else {
    console.log( `No winners this time`)
  }
}
 */
//checkWinners(dolphinsAvg, koalasAvg)

//const calcAverage = ( a, b, c ) => ( a + b + c ) / 3;


/* let scoreDolphins = calcAverage( 44,23,71 );
let scoreKoalas = calcAverage( 65,54,79 );

console.log( scoreDolphins, scoreKoalas );

const checkWinners = function ( dolphinsAvg, koalasAvg ) {
  
  if ( dolphinsAvg >= 2 * koalasAvg ) {
    console.log( `Dolphins win ${ dolphinsAvg } vs ${ koalasAvg }` )
    
  } else if ( koalasAvg >= 2 * dolphinsAvg ) {
    console.log( `Koalas win ${ koalasAvg } vs ${ dolphinsAvg }` )
    
  } else {
    console.log( `No winners this time`)
  }
}

checkWinners( scoreDolphins, scoreKoalas )

scoreDolphins = calcAverage( 85,54, 41);
scoreKoalas = calcAverage( 23, 34, 27 );

checkWinners(scoreDolphins, scoreKoalas );
 */

//!Coding challenge #2 for section three.

/* const calcTip =bill=>(bill) >= 50 && bill <= 300 ? bill *.15 : bill*.20
  

const bills = [ 125, 555, 44 ];

const tips = [ calcTip( bills[ 0 ] ), calcTip( bills[ 1 ] ), calcTip( bills[ 2 ] ) ];

const totals = [ bills[ 0 ] + tips[ 0 ], bills[ 1 ] + tips[ 1 ], bills[ 2 ] + tips[ 2 ] ];

console.log(bills, tips, totals); */

//!Coding challenge #3 for section three.

const mark = {
  fullName:'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi.toFixed(2)
  },
  
}
   
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi.toFixed(2)
  },
}

mark.calcBMI()
john.calcBMI()


  if ( mark.bmi > john.bmi ) {
    console.log (`${john.fullName}'s BMI of (${john.bmi.toFixed(2)}!) is higher than Mark's (${mark.bmi.toFixed(2)})!`)
  }
  else {
    console.log(`${mark.fullName} BMI (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})!`)
  }
