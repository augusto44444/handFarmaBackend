const db = require('../database/database')

module.exports = class ProdutoFarmacia {
    static getall(callback) {
        return db.query('SELECT * FROM produto_farmacia', callback)
    }

    static getId(id, callback) {
        return db.query(`SELECT * FROM produto_farmacia WHERE pf_in_codigo = ${id}`, callback)
    }

    static post(pf, callback) {
        return db.query('insert into produto_farmacia( pf_st_valor, pf_in_quantidade, pro_in_codigo, far_in_codigo) values(?, ?, ?, ?)', [pf.valor, pf.qtd, pf.pro_in_codigo, pf.far_in_codigo], callback)
    }

    static put(pf, callback) {
        return db.query('UPDATE produto_farmacia SET pf_st_valor = ?, pf_in_quantidade = ?, pro_in_codigo = ?, far_in_codigo = ? WHERE pf_in_codigo = ?', [pf.valor, pf.qtd, pf.pro_in_codigo, pf.far_in_codigo, pf.codigo], callback)
    }

    static delete(id, callback) {
        return db.query(`DELETE FROM produto_farmacia WHERE pf_in_codigo = ${id}`, callback)
    }

    

}