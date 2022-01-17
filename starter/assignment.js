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

const calcAverage = ( a, b, c ) => ( a + b + c ) / 3;


let scoreDolphins = calcAverage( 44,23,71 );
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
