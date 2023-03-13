const express = require('express');
const morgan = require('morgan');

//Importamos nuestras rutas
const router = require('./router/index.routes');
const app = express();

//Indicar ruta de archivos estaticoss
const statics = __dirname.replace('app', 'public');

app.set('port', process.env.PORT || 3000);
//Indicamos la ubicación de mis archivos .pug
app.set('views', './src/public/view');
//Indicamos que view engine vamos a implementar. (Evitamos utilizar la terminación .pug en el render!)
app.set('view engine', 'pug');


//MIDDLEWARES!
//Middleware para tratamiento de datos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Implementando "morgan" como Middleware
app.use(morgan("dev"));
app.use(express.static(statics));
//Implementando la ruta "index.routes" como Middleware
app.use(router);


module.exports = app;