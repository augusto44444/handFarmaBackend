const db = require('../database/database')

module.exports = class Produtos {
    static getall(callback) {
        return db.query('SELECT * FROM produtos', callback)
    }

    static getId(id, callback) {
        return db.query(`SELECT * FROM produtos WHERE pro_in_codigo = ${id}`, callback)
    }

    static post(produtos, callback) {
        return db.query('insert into produtos( pro_st_nome, pro_st_marca, pro_st_cod_barra, pro_ch_classificacao) values(?, ?, ?, ?)', [produtos.nome, produtos.marca, produtos.codBarra, produtos.classificacao], callback)
    }

    static put(produtos, callback) {
        return db.query('UPDATE produtos SET pro_st_nome = ?, pro_st_marca = ?, pro_st_cod_barra = ?, pro_ch_classificacao = ? WHERE pro_in_codigo = ?', [produtos.nome, produtos.marca, produtos.codBarra, produtos.classificacao, produtos.codigo], callback)
    }

    static delete(id, callback) {
        return db.query(`DELETE FROM produtos WHERE pro_in_codigo = ${id}`, callback)
    }


}