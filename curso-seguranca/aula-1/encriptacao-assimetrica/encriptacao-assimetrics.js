import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

console.log('Chave publica')
console.log(publicKey)

console.log('Chave privada:')
console.log(privateKey)

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem secreta")
);

console.log(dadosCriptografados.toString('hex'));

// transmição

const dadosDescriptografados = privateDecrypt(
    privateKey,
    dadosCriptografados
);

console.log(`Dados decifrados: ${dadosDescriptografados.toString('utf-8')}`);

