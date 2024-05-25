import {getIteracoes, newArray} from './NewArray.js';

/*
Percorre um determinado vetor, executando operações como filter e map,
e mostra ao final o total de vezes que os elementos do vetor foram acessados
(total de vezes que o vetor foi percorrido).
*/
const numeros = newArray([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
const soma =
    numeros
        // Passa uma primeira vez pelo vetor pecore 10
        .filter(n => n >= 0)
        // Passa uma segunda vez pelo vetor pecore 6
        .map(n => n * 2)
        // Passa uma terceira vez pelo vetor pecore 6
        .reduce((subtotal, n) => subtotal + n);
        // Ao final, o vetor foi percorrido 10 + 6 + 6 = 22 vezes

console.log(`JS -> Soma: ${soma}`);
console.log(`Tamanho do vetor: ${numeros.length}`);
console.log(`Iterações: ${getIteracoes()}`);
