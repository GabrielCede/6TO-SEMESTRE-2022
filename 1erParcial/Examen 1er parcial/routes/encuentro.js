const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    createEncuentro,
     deleteEncuentro
    } = require('../controllers').Encuentro;

const { validateFields } = require('../middlewares')

const router = Router();


router.post('/',[
    check('nombre', 'La infromación del encuentro es requerida').not().isEmpty(),
    validateFields
] , createEncuentro)



router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteEncuentro)

module.exports = router;