//esse é um bom caso para exemplificar recursão para alunos de programação
//essa função soma todos os elementos de um array
//boa prática: sempre que uma função for recursiva, ela deve ter um caso base
//caso base: é o caso em que a função não chama a si mesma
//caso recursivo: é o caso em que a função chama a si mesma

const soma = (array) => {
    if (array.length === 0) {
        return 0;
    } else {
        const firstElement = array[0];
        const remainingArray = array.slice(1);
        return firstElement + soma(remainingArray);
    }
}

const array = [1, 2, 3, 4, 5, 6];

console.log(soma(array)); // 21
