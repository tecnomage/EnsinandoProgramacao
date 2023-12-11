/**
 * Finds the highest number in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number} - The highest number in the array.
 */
const findHigherNumber = (array) => {
  if (array.length === 1) {
    return array[0];
  } else {
    const firstElement = array[0];
    const remainingArray = array.slice(1);
    const higherNumber = findHigherNumber(remainingArray);
    if (firstElement > higherNumber) {
      return firstElement;
    } else {
      return higherNumber;
    }
  }
};

const array = [1, 2, 3, 12, 4, 5, 6, 22];
console.log(findHigherNumber(array)); //22
