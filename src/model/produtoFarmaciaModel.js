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

    static searchUser(values, callback) {
        return db.query(`
        select * from produto_farmacia pf, farmacia far, produtos pro where
        pf.pro_in_codigo = pro.pro_in_codigo and
        pf.far_in_codigo = far.far_in_codigo and
        (
            far.far_st_rua like '%${values.endereco}%' or
            far.far_st_bairro like '%${values.endereco}%' or
            far.far_st_cidade like '%${values.endereco}%' )
            and
        (
            pro.pro_st_nome like '%${values.remedio}%' or
            pro.pro_st_marca like '%${values.remedio}%'
        )`, callback)
    }


}