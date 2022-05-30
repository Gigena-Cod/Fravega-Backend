// MODELO
const Profile = require('../models/Profile')

//OBTENER PERFILES
exports.getProfiles =async (request,response) =>{
    
    try {
        const profiles = await Profile.find();
        
        if(profiles){
            response.status(200).json(profiles) 

        }else{

            response.status(204)
            response.send({Message:`No existen perfiles cargados`})
        }
             

    } catch (error) {
        response.status(204).send({Message:`No se pudo obtener los perfiles de forma correcta`})
    }    
}

//OBTENER PERFIL POR ID
exports.getProfileById =async (request,response) =>{
    
    try {
        
        const profile = await Profile.findById({_id:request.params.id});
        
        if(profile){
            response.status(200).json(profile) 

        }else{

            response.send({Message:`El perfil id ${request.params.id} es inexistente`})
            response.status(204)
        }
             

    } catch (error) {
        
        response.send({Message:`No se pudo obtener el perfil id ${request.params.id} de forma correcta`})
        response.status(204)
    }    
}
