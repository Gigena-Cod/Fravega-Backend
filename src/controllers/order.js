// MODELO
const Order = require('../models/Order')

//OBTENER ORDENES
exports.getOrders =async (request,response) =>{
    try {
        const orders = await Order.find();
        
        if(orders){
            response.status(200).json(orders) 

        }else{

            response.status(204)
            response.send({Message:`No exiten ordenes cargadas`})
        }
             

    } catch (error) {
        response.status(204).send({Message:`No se pudo obtener las ordenes de forma correctamente`})
    }    
}

//OBTENER ORDEN POR ID
exports.getOrderById =async (request,response) =>{
    
    try {
        
        const order = await Order.findById({_id:request.params.id});
        
        if(order){
            response.status(200).json(order) 

        }else{

            response.send({Message:`Order ${request.params.id} inexistente`})
            response.status(204)
        }
             

    } catch (error) {
        
        response.send({Message:`No se pudo obtener la orden id ${request.params.id} forma correctamente`})
        response.status(204)
    }    
}