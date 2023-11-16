const { Router } = require('express')
const NiveisController = require('../controllers/NiveisController.js')

const router = Router()

//GET
router.get('/niveis', NiveisController.buscarTodos)
router.get('/niveis/:id', NiveisController.buscarPorId)

//POST-PUT-DELETE
router.post('/niveis', NiveisController.salvarNivel)
router.put('/niveis/:id', NiveisController.editarNivel)
router.delete('/niveis/:id', NiveisController.deletarNivel)


module.exports = router;