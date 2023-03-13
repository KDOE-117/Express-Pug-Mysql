const pool = require("../../db/db.js");

class User {
    static table = 'userTable';
    #id;
    #nombre;
    #contraseña;
    #email;

    constructor(body) {
        this.#nombre = body.nombre;
        this.#contraseña = body.contraseña;
        this.#email = body.email;
    }

    async create() {
        const insert = await pool.query('INSERT INTO userTable(nombre,contraseña,email) VALUES(?, ?, ?)', [this.#nombre, this.#contraseña, this.#email])
        return insert[0]
    }
}

module.exports = User;