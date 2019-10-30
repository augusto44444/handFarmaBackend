const db = require('../database/database')

module.exports = class Farmacia {
    static getall(callback) {
        return db.query('SELECT * FROM farmacia', callback)
    }

    static getId(id, callback) {
        return db.query(`SELECT * FROM farmacia WHERE far_in_codigo = ${id}`, callback)
    }

    static post(farmacia, callback) {
        return db.query('insert into farmacia( far_st_cnpj, far_st_cep, far_ch_estado, far_st_cidade, far_st_bairro, far_st_rua, far_in_numero, far_st_nome, far_st_rede, far_st_horario_funcionamento, far_st_telefone, far_st_celular, usu_in_codigo) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [farmacia.far_st_cnpj, farmacia.far_st_cep, farmacia.far_ch_estado, farmacia.far_st_cidade, farmacia.far_st_bairro, farmacia.far_st_rua, farmacia.far_in_numero, farmacia.far_st_nome, farmacia.far_st_rede, farmacia.far_st_horario_funcionamento, farmacia.far_st_telefone, farmacia.far_st_celular, farmacia.usu_in_codigo], callback)
    }

    static put(farmacia, callback) {
        return db.query('UPDATE farmacia SET far_st_cnpj = ?, far_st_cep = ?, far_ch_estado = ?, far_st_cidade = ?, far_st_bairro = ?, far_st_rua = ?, far_in_numero = ?, far_st_nome = ?, far_st_rede = ?, far_st_horario_funcionamento = ?, far_st_telefone = ?, far_st_celular = ?, usu_in_codigo = ? WHERE far_in_codigo = ?', [farmacia.far_st_cnpj, farmacia.far_st_cep, farmacia.far_ch_estado, farmacia.far_st_cidade, farmacia.far_st_bairro, farmacia.far_st_rua, farmacia.far_in_numero, farmacia.far_st_nome, farmacia.far_st_rede, farmacia.far_st_horario_funcionamento, farmacia.far_st_telefone, farmacia.far_st_celular, farmacia.usu_in_codigo, farmacia.far_in_codigo], callback)
    }

    static delete(id, callback) {
        return db.query(`DELETE FROM farmacia WHERE far_in_codigo = ${id}`, callback)
    }


}