/**
 * An array is called zero-balanced if its elements sum to 0 and for each positive element n,
 *  there exists another element that is the negative of n.
 *  Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array,
 *  else return false.
 *  Note that an empty array will not sum to zero.
 *
 * zeroBalanced([1,-1,-5,5])=>true
 * zeroBalanced([0,0,0,0,0,])=>true
 * zeroBalanced([1,-1,-5,5,100])=>true
 */


let zeroBalanced = [1, -1, 3, -3, 0];
let sum = zeroBalanced.reduce(function isZeroBalanced(a, b){return a + b;}, );
   if (sum === 0){
     console.log("true");
   }
  else console.log("false");
