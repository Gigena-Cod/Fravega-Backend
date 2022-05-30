const  mongoose= require("mongoose")
const { Schema } = mongoose;

const User = new Schema({    
    nombre: String,        
    apellido: String,
    email: String,    
    dni: Number,
    id_direccion:String
})

module.exports = mongoose.model('User',User);