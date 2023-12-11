
/**
 * Counts the number of items in a list recursively.
 * @param {Array} lista - The list to count the items from.
 * @param {number} indice - The starting index for counting.
 * @returns {number} - The total number of items in the list.
 */
const conta_items = (lista, indice) =>{

    if(lista.length == 0  || indice == lista.length){
        return 0;
}
else {
    return 1 + conta_items(lista, indice + 1);
}

}


const lista = [1,2,3,4,5,6,7,8,9,10];
console.log(conta_items(lista, 0));