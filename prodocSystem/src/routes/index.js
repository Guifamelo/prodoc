const { Router } = require('express');
const userController = require('../controllers/userController');
const oportunidadeController = require('../controllers/oportunidadeController');

const routes = Router();

routes.get('/', (req, res) =>{
    res.send('<h1>Prodoc Online!</h1>')
})

routes.post('/users', userController.createUser)
routes.get('/users', userController.getUsers)
routes.get('/users/:user_id',userController.getUserById)
routes.get('/users/user/:user_name',userController.getUserByUserName)

routes.post('/oportunidades', oportunidadeController.createOportunidade)
routes.get('/oportunidades', oportunidadeController.getOportunidades)
routes.get('/oportunidades/:oportunidade_id', oportunidadeController.getOportunidadeById)

module.exports = routes