const  mongoose= require("mongoose")
const { Schema } = mongoose;

const Direction = new Schema({    
    calle: String,   
    altura: Number,
    ciudad: String,      
    provincia: String, 
})

module.exports = mongoose.model('Direction',Direction);