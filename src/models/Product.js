const  mongoose= require("mongoose")
const { Schema } = mongoose;

const Product = new Schema({    
    titulo: String,        
    local: String,
    predescripcion: String,
    descripcion: String,
    precio: Number,
    envio: Number,
    images: Array 
})

module.exports = mongoose.model('Product',Product);