const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

//---------------------------- pessoas ----------------------------

//GET
router.get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegarPorId)

//POST-PUT-DELETE
router.post('/pessoas', PessoaController.salvarPessoa)
router.post('/pessoas/restaura/:id', PessoaController.restauraPessoa)
router.put('/pessoas', PessoaController.editarPessoa)
router.put('/pessoas/cancela/:id', PessoaController.cancelaPessoa)
router.delete('/pessoas/:id', PessoaController.deletarPessoa)


//---------------------------- matriculas ----------------------------
//GET
router.get('/pessoas/:id/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas)
router.get('/pessoas/matriculas/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurmaId)
router.get('/pessoas/matriculas/lotada', PessoaController.pegatTurmasLotadas)

//POST-PUT-DELETE
router.post('/pessoas/:id/matricula/', PessoaController.salvarMatricula)
router.put('/pessoas/:id/matricula/:matriculaId', PessoaController.editarMatricula)
router.delete('/pessoas/:id/matricula/:matriculaId', PessoaController.deletarMatricula)




module.exports = router;