/*Detallitos*/
const User = require("../../models/user.model.js");

class UserController {
    static createUser = async (req, res) => {
        try {
            const { nombre, contraseña, email } = req.body;
            const dataUser = {
                nombre: nombre,
                contraseña: contraseña,
                email: email
            };
            //Validaciones
            if (Object.entries(dataUser.nombre && dataUser.contraseña && dataUser.email).length === 0) {
                res.send({
                    status: 400,
                    message: 'No se aceptan vacios!'
                });
            } else {
                const usuario = new User(req.body);
                const ejecutar = await usuario.create()
                if (ejecutar.affectedRows > 0) {
                    res.status(202).json({
                        message: "Area Created Successfully"
                    })
                }
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