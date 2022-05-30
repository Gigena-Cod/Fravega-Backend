const express = require('express');
const router = express.Router();
const cors = require("cors");

// CORS 
router.use(cors());

// CREATE APPLICATION/X-WWW-FORM-URLENCODED PARSER
router.use(express.json())
router.use(express.urlencoded({extended:false}))


//--------------//
// DIRECCIONES //
//--------------//

const DirectionController = require('../controllers/direction')

//OBTENER DIRECCIONES
router.get('/getDirections',DirectionController.getDirection)

//OBTENER DIRECCION POR ID 
router.get('/getDirection/:id',DirectionController.getDirectionById)


//---------//
// ORDENES //
//---------//

const OrderController = require('../controllers/order')

//OBTENER ORDENES
router.get('/getOrders',OrderController.getOrders)

//OBTENER UNA ORDEN POR ID //
router.get('/getOrder/:id',OrderController.getOrderById)


//-----------//
// PRODUCTOS //
//-----------//

const ProductsController = require('../controllers/product')

//OBTENER PRODUCTOS
router.get('/getProducts',ProductsController.getProducts)

//OBTENER PRODUCTO POR ID
router.get('/getProduct/:id',ProductsController.getProductById)


//-----------//
// PERFILES //
//-----------//

const ProfileController = require('../controllers/profile')

//OBTENER PERFILES
router.get('/getProfiles',ProfileController.getProfiles)

//OBTENER PERFIL POR ID
router.get('/getProfile/:id',ProfileController.getProfileById)


//----------//
// USUARIOS //
//----------//

const UserController = require('../controllers/user')

//OBTENER USUARIOS
router.get('/getUsers',UserController.getUsers)

//OBTENER UN USUARIO POR DNI
router.get('/getUser/:dni',UserController.getUserByDni)





module.exports = router;