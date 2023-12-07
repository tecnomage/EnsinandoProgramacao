
/**
 * Handles the search for a specific box in an array recursively.
 * @param {number[]} arr - The array of boxes.
 * @param {number} i - The index of the current box being checked.
 * @returns {number|undefined} - The value of the box if found, otherwise undefined.
 */
function boxHandle(arr, i) {
  if (arr[i] == 18) {
    console.log(`caixa ${i} encontrada`);
    return arr[i];
  } else if (i < arr.length) {
    i++;
    console.log("chamando a caixa " + i);
    return boxHandle(arr, i);
  }
}

/**
 * Handles the search for a specific box in an array using a while loop.
 * @param {number[]} arr - The array of boxes.
 * @param {number} i - The index of the current box being checked.
 * @returns {number|undefined} - The value of the box if found, otherwise undefined.
 */
function boxHandleWhile(arr, i) {
  while (i < arr.length) {
    if (arr[i] == 18) {
      console.log(`caixa ${i} encontrada`);
      return arr[i];
    } else {
      i++;
      console.log("chamando a caixa " + i);
    }
  }
}

const caixas = [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const saida = boxHandle(caixas, 0);

console.log(saida);

const saida2 = boxHandleWhile(caixas, 0);

console.log(saida2);

//console.log(caixas.length);
