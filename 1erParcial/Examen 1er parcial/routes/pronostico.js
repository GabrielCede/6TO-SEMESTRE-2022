const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    createPronostico,
     deletePronostico
    } = require('../controllers').Pronostico;

const { validateFields } = require('../middlewares')

const router = Router();


router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createPronostico)



router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePronostico)

module.exports = router;