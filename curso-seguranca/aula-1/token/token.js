import jwt from "jsonwebtoken";

const chaveSecreta = "chaveSecreta";

const token = jwt.sign(
    {
        apelido: "jm",
        curso: "node segurança"
    },
    chaveSecreta
)

console.log(token);

const decodificado = jwt.verify(token, chaveSecreta);

console.log(decodificado);