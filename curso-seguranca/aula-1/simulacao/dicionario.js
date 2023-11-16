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

const usuario = new Usuario("beto", "senhaBeto");

console.log(usuario);

console.log("------- Censario de sucesso! --------")
usuario.autentica("beto", "senhaBeto");

console.log("------- Censario de fracaço! --------")
usuario.autentica("beto porto", "senhaBeto");
usuario.autentica("beto", "senhabeto");

const senhasComuns = ['senha1', 'senha2', 'senha3', 'senha4', 'senhaBeto'];

senhasComuns.map((senha) => {
    if(usuario.autentica('beto', senha)){
        console.log(senha);
    }
})


