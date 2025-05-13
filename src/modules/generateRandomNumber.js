'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [];

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (digit !== 0 && !digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return parseInt(digits.join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
