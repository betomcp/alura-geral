const vet = [8, 1, 7, 3, 98, 44, 33, 11, 13, 4];

console.log(`antes: ${vet}`);

for (let i = 0; i < vet.length; i++) {
    for (let j = 0; j < vet.length - i; j++) {
        if (vet[j] > vet[j + 1]) {
            let aux = vet[j];
            vet[j] = vet[j + 1];
            vet[j + 1] = aux;
        }
    }
}

console.log(`depois: ${vet}`);