const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController.js')

const router = Router();

//GET
router.get('/turmas', TurmaController.buscarTodos)
router.get('/turmas/:id', TurmaController.buscarPorId)
router.get('/turmas/nivel/:id', TurmaController.buscarPorNivelId)
router.get('/turmas/docente/:id', TurmaController.buscarPorDocentelId)

//POST-PUT-DELETE
router.post('/turmas', TurmaController.salvarTurma)
router.put('/turmas/:id', TurmaController.editarTurma)
router.delete('/turmas/:id', TurmaController.deletarTurma)


module.exports = router