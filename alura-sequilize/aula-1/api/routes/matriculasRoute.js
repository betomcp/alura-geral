const { Router } = require('express')
const MatriculaConroller = require('../controllers/MatriculaController.js')

const router = Router();

//GET
router.get('/matriculas', MatriculaConroller.buscarTodos)
router.get('/matriculas/:id', MatriculaConroller.buscarPorId)
router.get('/matriculas/estudante/:id', MatriculaConroller.buscarPorEstudanteId)
router.get('/matriculas/turma/:id', MatriculaConroller.buscarPorTurmaId)

//POST-PUT-DELETE
router.post('/matriculas', MatriculaConroller.salvarMatricula)
router.put('/matriculas/:id', MatriculaConroller.editarMatricula)
router.delete('/matriculas/:id', MatriculaConroller.deletarMatricula)




module.exports = router;