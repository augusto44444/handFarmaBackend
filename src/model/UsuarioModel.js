const db = require('../database/database')
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = class usuario {
    static getall(callback) {
        return db.query('SELECT * FROM usuario', callback)
    }

    static getId(id, callback) {
        return db.query(`SELECT * FROM usuario WHERE usu_in_codigo = ${id}`, callback)
    }

    static post(usuario, callback) {
        const hash = bcrypt.hashSync(usuario.password, salt)
        return db.query('insert into usuario(usu_st_email, usu_st_password, usu_ch_type) values(?, ?, ?)', [usuario.email, hash, usuario.tipo], callback)
    }

    static put(usuario, callback) {
        const hash = bcrypt.hashSync(usuario.password, salt)
        return db.query('UPDATE usuario SET usu_st_email = ?, usu_st_password = ?, usu_ch_type = ? WHERE usu_in_codigo = ?', [usuario.email, hash, usuario.tipo, usuario.codigo], callback)
    }

    static putWithoutPassword(usuario, callback) {
        return db.query('UPDATE usuario SET usu_st_email = ?, usu_ch_type = ? WHERE usu_in_codigo = ?', [usuario.email, usuario.tipo, usuario.codigo], callback)
    }

    static delete(id, callback) {
        return db.query(`DELETE FROM usuario WHERE usu_in_codigo = ${id}`, callback)
    }

    static setPassword(email, password, callback) {
        const hash = bcrypt.hashSync(password, salt)
        return db.query(`
            UPDATE 
                usuario 
            SET 
                usu_st_password = '${hash}' 
            WHERE
                usu_st_email = '${email}'
            `, callback)
    }

}