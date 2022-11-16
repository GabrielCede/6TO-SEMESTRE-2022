const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    createApostador,
    deleteApostador
    } = require('../controllers').Apostador;

const { validateFields } = require('../middlewares')

const router = Router();


router.post('/',[
    check('nombre', 'La infromación del Apostador es requerida').not().isEmpty(),
    validateFields
] , createApostador)



router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteApostador)

module.exports = router;