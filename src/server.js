require ('dotenv').config()
// EXPRESS 

// https://expressjs.com/es/starter/installing.html
// https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction

// npm i express --save

const express = require("express");
const app = express()

// MORGAN 
// https://es.acervolima.com/que-es-morgan-en-node-js/#:~:text=MORGAN%20en%20Node.-,js%3F,c%C3%B3digo%20JavaScript%20fuera%20del%20navegador.
// npm i morgan --save

const morgan = require("morgan");
app.use(morgan('tiny'))


// MONGOOSE 

// https://codigofacilito.com/articulos/que-es-mongoose
// https://www.npmjs.com/package/mongoose
// npm i mongoose
const mongoose =require ('mongoose')


mongoose.connect(
  process.env.MONGODB_URI
).then( db => console.log('Conectado a la base de datos'))
.catch( error => console.error(error))


// ROUTES 
app.use(require('./routes/routes.js'))

//SERVER IS LISTENING
app.listen( process.env.PORT, () => {
  console.log(`Server is running on port ${ process.env.PORT}.`);
});