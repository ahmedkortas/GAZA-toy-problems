/**
 * in order to calculate the factorial of 5 we need to do the following
 * 5*4*3*2*1
 */

/**
 * @param {number}
 * @returns {number}
 */

//this code contains some problems please fix them

function factorial (fact) {
 if (fact === 0 || fact === 1)
    return 1;
  for (let i = fact - 1 ; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
};
console.log(factorial(5));
