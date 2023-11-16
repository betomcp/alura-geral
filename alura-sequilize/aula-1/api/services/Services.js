const database = require('../models')

class Services {

    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll();
    }

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where: { id: id } });
    }

    async salvaUmRegistro(el) {
        return database[this.nomeDoModelo].create(el);
    }

    async editarUmRegistro(el, id, transacao = {}) {
        return database[this.nomeDoModelo].update(el, { where: { id: id } });
    }

    async editarRegistros(el, where, transacao = {}) {
        return database[this.nomeDoModelo].update(el, { where: { ...where } });
    }

    async apagarUmRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } });
    }

    async restauraUmRegistro(id){
        return database[this.nomeDoModelo].restore({ where: { id: id } });
    }
}

module.exports = Services;