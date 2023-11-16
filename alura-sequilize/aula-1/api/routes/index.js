const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const matriculas = require('./matriculasRoute');
const turmas = require('./turmasRouter')
const niveis = require('./nivelRouter')

// const PessoaController = require('../controllers/PessoaController');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(matriculas)
    app.use(turmas)
    app.use(niveis)
}