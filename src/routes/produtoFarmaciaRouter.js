const express = require('express')
const router = express.Router()
const ProdutoFarmaciaModel = require('../model/produtoFarmaciaModel')
const RespostaClass = require('../configs/RespostaClass')

router.get('/', function (req, res, next) {
    ProdutoFarmaciaModel.getall(function (err, data) {
        const resposta = new RespostaClass();

        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro no IF(getall)'
            resposta.errorMessage = err
        } else {
            resposta.dados = data
            resposta.msg = 'Sucesso ao receber dados'
        }
        res.json(resposta)
    })
})


router.post('/nome/', function (req, res, next) {
    ProdutoFarmaciaModel.getByName(req.body.nome, function (err, data) {
        const resposta = new RespostaClass();

        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro no IF(post)'
            resposta.errorMessage = err
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'Cadastrado com sucesso!!!'
            } else {
                resposta.err = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(post)'
            }
        }
        res.json(resposta)
    })
})

router.post('/', function (req, res, next) {
    ProdutoFarmaciaModel.post(req.body, function (err, data) {
        const resposta = new RespostaClass();

        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro no IF(post)'
            resposta.errorMessage = err
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'Cadastrado com sucesso!!!'
            } else {
                resposta.err = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(post)'
            }
        }
        res.json(resposta)
    })
})

router.post('/search/', function (req, res, next) {
    ProdutoFarmaciaModel.searchUser(req.body, function (err, data) {
        const resposta = new RespostaClass();

        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro no IF(post)'
            resposta.errorMessage = err
        } else {
            resposta.dados = data
            resposta.msg = 'Sucesso ao receber dados'
        }
        res.json(resposta)
    })
})


router.put('/', function (req, res, next) {
    ProdutoFarmaciaModel.put(req.body, function (err, data) {
        const resposta = new RespostaClass();

        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro no IF(put)'
            resposta.errorMessage = err
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'Editado com sucesso!!!'
            } else {
                resposta.err = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(put)'
            }
        }
        res.json(resposta)
    })
})

router.delete('/:id?', function (req, res, next) {
    ProdutoFarmaciaModel.delete(req.params.id, function (err, data) {
        const resposta = new RespostaClass();

        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro no IF(delete)'
            resposta.errorMessage = err
        } else {
            if (data.affectedRows > 0) {
                resposta.dados = data
                resposta.msg = 'excluido com sucesso!!!'
            } else {
                resposta.err = true;
                resposta.msg = 'Ocorreu um erro no segundo IF(delete)'
            }
        }
        res.json(resposta)
    })
})

module.exports = router;