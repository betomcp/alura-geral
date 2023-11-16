import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mesnagem = "demo do curso alura";
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);

const mensgameCifrada = cifra.update(mesnagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensgameCifrada);

// Transmição --------------------- chave, vi, mensagem

// Decifrar a mensagem

const decifra = createDecipheriv('aes256', chave, vi);

const mensagemDecifrada = decifra.update(mensgameCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`);