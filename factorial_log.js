function factorial(valor) {
  if (valor === 0) {
    return 1;
  } else {
    return valor * factorial(valor - 1);
  }
}

function logaritmo(base = 2, valor, contador = 0) {
  if (valor <=1 ) {
    valor = 0;
    return contador;
  }
  else {
    const x = Math.floor(valor / base);
    contador++;
    return logaritmo(base, x, contador);
  }
  //base**x=valor;
}

// log b a = x <=> base^x=A

console.log(logaritmo(2,64));
console.log(logaritmo(3,81));

