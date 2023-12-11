/**
 * Sorts an array using the quicksort algorithm.
 * @param {Array} vetor - The array to be sorted.
 * @param {number} [inicio=0] - The starting index of the array to be sorted.
 * @param {number} [fim=vetor.length - 1] - The ending index of the array to be sorted.
 */
function quicksort(vetor, inicio = 0, fim = vetor.length - 1) {
    if (inicio < fim) {
        const posicaoPivo = particionar(vetor, inicio, fim);
        quicksort(vetor, inicio, posicaoPivo - 1);
        quicksort(vetor, posicaoPivo + 1, fim);
    }
}

/**
 * Partitions the array and returns the position of the pivot element.
 * @param {Array} vetor - The array to be partitioned.
 * @param {number} inicio - The starting index of the partition.
 * @param {number} fim - The ending index of the partition.
 * @returns {number} - The position of the pivot element.
 */
function particionar(vetor, inicio, fim) {
    const pivo = vetor[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivo) {
            i++;
            [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
        }
    }
    [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
    return i + 1;
}

const vetor = [5, 3, 2, 4, 7, 1, 0, 6];
console.log(vetor);

quicksort(vetor);
console.log(vetor);
