const Direction = require('../models/Direction')

//OBTENER DIRECCIONES
exports.getDirection =async (request,response) =>{
    try {
        const direction = await Direction.find();
        
        if(direction.length>0){
            
            response.status(200).json(direction) 

        }else{
                       
            response.send({Message:`No existen direcciones`})
            response.status(204)
        }
             

    } catch (error) {
        
        response.send({Message:`No se pudo iniciar sesion correctamente`})
        response.status(204)
       
    }    
}


//OBTENER DIRECION POR ID
exports.getDirectionById =async (request,response) =>{
    try {
        
        const direction = await Direction.findById({_id:request.params.id});
        if(direction){
            
            response.status(200).json(direction) 

        }else{
                       
            response.send({Message:`No existe direccion con id ${request.params.id}`})
            response.status(204)
        }
             

    } catch (error) {
        
        response.send({Message:`No se pudo obtener producto correctamente`})
        response.status(204)
       
    }    
}
