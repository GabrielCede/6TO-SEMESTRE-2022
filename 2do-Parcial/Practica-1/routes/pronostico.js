const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    createPronostico,
    updatePronostico,
    getPronostico,
     deletePronostico,
     
    } = require('../controllers').Pronostico;

const { validateFields } = require('../middlewares')

const router = Router();


router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
]  , getPronostico);


router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createPronostico)

router.put('/:id', updatePronostico)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePronostico)

module.exports = router;