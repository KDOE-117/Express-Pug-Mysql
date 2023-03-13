/*Detallitos*/
const User = require("../../models/user.model.js");

class UserController {
    static createUser = async (req, res) => {
        try {
            console.log("preBody", req.body);
            const { nombre, contraseña, email } = req.body;
            const dataUser = {
                nombre: nombre,
                contraseña: contraseña,
                email: email
            };
            console.warn("dataUser", dataUser);
            //VALIDACIONES!!
            //Verificar que lo que se está enviando está vacio
            if (Object.entries(dataUser.nombre || dataUser.contraseña || dataUser.email).length === 0) {
                res.redirect('/formulario')
            } else {
                new User(req.body);
                console.log("dataUser", dataUser);
                const exec = await dataUser.create()
                res.redirect('/formulario')
            }
        } catch (error) {
            return res.send({
                "status": 404,
                "message": error.message
            })
        }
    }
}

module.exports = UserController;