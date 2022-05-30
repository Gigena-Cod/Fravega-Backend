// MODELO
const Product = require('../models/Product')

//OBTENER USUARIOS
exports.getProducts =async (request,response) =>{
    try {
        const products = await Product.find();
        
        if(products){
            response.status(200).json(products) 

        }else{

            response.status(204)
            response.send({Message:`No existen productos cargados`})
        }
             

    } catch (error) {
        response.status(204).send({Message:`No se pudo obtener los productos correctamente`})
    }    
}

//OBTENER PRODUCTO POR ID
exports.getProductById =async (request,response) =>{
    
     try {
        
        const product = await Product.findById({_id:request.params.id});
        
         if(product){
           
            response.status(200).json(product) 

         }else{

            response.send({Message:`Producto inexistente`})
            response.status(204)
     }
             

    } catch (error) {
        
        
        response.send({Message:`No se pudo obtener el producto correctamente`})
        response.status(204)
    }    
}






