import { createHash } from "crypto";

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("salve memo"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.hash === criaHash(senha)){
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
