const express = require('express')
const router = express.Router()
const usuarioModel = require('../model/UsuarioModel')
const RespostaClass = require('../configs/RespostaClass')
const db = require('../database/database')
const bcrypt = require('bcrypt')

router.get('/', function (req, res, next) {
    usuarioModel.getall(function (err, data) {
        let resposta = new RespostaClass()

        if (err) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro no IF(GETALL)'
            console.log(err)
        } else {
            resposta.dados = data
            resposta.msg = 'Sucesso ao receber dados'
        }
        res.json(resposta)
    })
})

router.get('/:id?', function (req, res, next) {
    usuarioModel.getId(req.params.id, function (err, data) {
        let resposta = new RespostaClass()

        if (err) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro no IF(getID)'
            console.log(err)
        } else {
            resposta.dados = data
            resposta.msg = 'Sucesso ao receber dados'
        }
        res.json(resposta)
    })
})

router.delete('/:id?', function (req, res, next) {
    usuarioModel.delete(req.params.id, function (err, data) {
        let resposta = new RespostaClass()

        if (err) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro no IF(delete)'
            resposta.errorMessage = err;
            console.log(err)
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'excluido com sucesso!!!'
            } else {
                resposta.erro = true;
                resposta.dados = data
                resposta.msg = 'Ocorreu um erro no segundo IF(delete)'
            }
        }
        res.json(resposta)
    })
})

router.post('/', function (req, res, next) {
    usuarioModel.post(req.body, function (err, data) {
        let resposta = new RespostaClass()

        if (err) {
            if (err.errno === 1062) {
                resposta.erro = true;
                resposta.msg = 'email Existente'
                console.log(err)
            } else {
                resposta.erro = true;
                resposta.msg = err
                console.log(err)
            }
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'Cadastrado com sucesso!!!'
            } else {
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(post)'
            }
        }
        res.json(resposta)
    })
})

router.put('/', function (req, res, next) {
    usuarioModel.put(req.body, function (err, data) {
        let resposta = new RespostaClass()

        if (err) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro no IF(put)'
            console.log(err)
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'Editado com sucesso!!!'
            } else {
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(put)'
            }
        }
        res.json(resposta)
    })
})

router.put('/whithoutPassword', function (req, res, next) {
    usuarioModel.putWithoutPassword(req.body, function (err, data) {
        let resposta = new RespostaClass()

        if (err) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro no IF(putWithoutSenha)'
            console.log(err)
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'Editado com sucesso!!!'
            } else {
                resposta.erro = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(putWithoutSenha)'
            }
        }
        res.json(resposta)
    })
})

router.post('/auth', (req, res, next) => {
    db.query(`SELECT * FROM usuario WHERE usu_st_email = '${req.body.email}'`, function (err, data) {
        const resposta = new RespostaClass()
        if (!data || err) {
            resposta.erro = true;
            resposta.errorMessage = 'Houve algum erro ao trazer os dados referentes ao email informado';
            resposta.msg = err;

        } else {
            if (!!data[0] === false) {
                resposta.msg = 'Usuário não existe'
                resposta.erro = true
            } else {
                const result = bcrypt.compareSync(req.body.password, data[0].usu_st_password)
                if (result == true) {
                    resposta.dados = data
                    resposta.msg = 'Logado com Sucesso'
                } else {
                    resposta.msg = 'Senha Incorreta'
                }
            }

        }
        res.json(resposta)
    })
})

module.exports = router;