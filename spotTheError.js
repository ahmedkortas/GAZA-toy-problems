/**
 * in order to calculate the factorial of 5 we need to do the following
 * 5*4*3*2*1
 */

/**
 * @param {number}
 * @returns {number}
 */

//this code contains some problems please fix them

const factorial = (n) => {
  var fact = 1;
  for (let i = n ; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
};
