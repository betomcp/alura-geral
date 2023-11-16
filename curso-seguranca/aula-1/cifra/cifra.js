const mensagemSecreta = "alura";

console.log("antes " + mensagemSecreta);

function cifraMensagem(msg, movimentos) {
    const mensagemCifrada = msg.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos);
    })

    return mensagemCifrada.join('');
}

function decifraMensagem(msg, movimentos) {
    const mensagemCifrada = msg.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos);
    })

    return mensagemCifrada.join('');
}

const cifrada = cifraMensagem(mensagemSecreta, 4);
console.log("cifrada " + cifrada); 

const decifrada = decifraMensagem(cifrada, 4);
console.log("decifrada " + decifrada); 

console.log("abc".charCodeAt(0));
console.log(String.fromCharCode(97));