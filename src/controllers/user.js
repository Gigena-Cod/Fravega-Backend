// MODELO
const User = require('../models/User')

//OBTENER USUARIOS
exports.getUsers =async (request,response) =>{
 
    try {
        const users = await User.find();
        
        if(users){
            response.status(200).json(users) 

        }else{

            response.status(204)
            response.send({Message:`Usuario y/o contraseña incorrecta`})
        }
             

    } catch (error) {
        response.status(204).send({Message:`No se pudo iniciar sesion correctamente`})
    }    
}

//OBTENER USUARIO POR ID
exports.getUserByDni =async (request,response) =>{
    
    try {
        
        const user = await User.findOne({dni: parseInt(request.params.dni) });
        
        if(user){
            response.status(200).json(user) 

        }else{

            response.send({Message:`Usuario y/o contraseña incorrecta`})
            response.status(204)
        }
             

    } catch (error) {
        
        response.send({Message:`No se pudo iniciar sesion correctamente`})
        response.status(204)
    }    
}

//REGISTRAR USUARIO
// exports.insertData = async (request,response) =>{
    
//     try {
//         const user = new User(request.body)
//         await user.save()

//         response.status(200).send({Message:`Usuario registrado correctamente`})      

//     } catch (error) {
//         response.status(204).send({Message:`No se pudo registrar usuario correctamente`})
//     }
// }

