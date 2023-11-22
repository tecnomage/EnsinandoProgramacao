function resolverPolinomioQuadratico(a,b,c) {
    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [raiz1, raiz2];
    } else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        return [raiz];
    } else {
        // Raízes complexas
        const parteReal = -b / (2 * a);
        const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
        const raiz1 = `${parteReal.toFixed(2)} + ${parteImaginaria.toFixed(2)}i`;
        const raiz2 = `${parteReal.toFixed(2)} - ${parteImaginaria.toFixed(2)}i`;
        return [raiz1, raiz2];
    }
}

// Exemplo de uso
const coeficienteA = 1;
const coeficienteB = -3;
const coeficienteC = 2;

const solucoes = resolverPolinomioQuadratico(coeficienteA, coeficienteB, coeficienteC);
console.log(`Soluções: ${solucoes.join(', ')}`);