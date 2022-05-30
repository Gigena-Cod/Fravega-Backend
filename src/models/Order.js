const  mongoose= require("mongoose")
const { Schema } = mongoose;

const Order = new Schema({    
    id_profile: String,        
    fecha: String,
    direccion: String,
    products: Array 
})

module.exports = mongoose.model('Order',Order);