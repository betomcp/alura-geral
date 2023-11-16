import { createHash } from "crypto";

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("usuário autenticado")
            return true;
        }

        console.log("usuário ou senha incorretos");
        return false;
    }
}

const usuario = new Usuario("beto", "18056");

console.log(usuario);

console.log("------- Censario de sucesso! --------")
usuario.autentica("beto", "1556");

console.log("------- Censario de fracaço! --------")
usuario.autentica("beto porto", "1556");
usuario.autentica("beto", "senhabeto");

for (let senhaTeste = 0; senhaTeste < 100000; senhaTeste++) {
    if(usuario.autentica("beto", senhaTeste.toString())){
        console.log(senhaTeste);
        senhaTeste = 110000;
    }
}
