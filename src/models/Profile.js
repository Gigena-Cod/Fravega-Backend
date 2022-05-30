const  mongoose= require("mongoose")
const { Schema } = mongoose;

const Profile = new Schema({    
    id_profile: String,       
    password: String
})

module.exports = mongoose.model('Profile',Profile);