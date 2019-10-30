const express = require('express')
const router = express.Router()
const FarmaciaModel = require('../model/FarmaciaModel')
const RespostaClass = require('../configs/RespostaClass')

router.get('/', function (req, res, next) {
    FarmaciaModel.getall(function (err, data) {
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

router.get('/user/:id', function (req, res, next) {
    FarmaciaModel.getByUserId(req.params.id, function(err, data) {
        const resposta = new RespostaClass()
        
        if(err) {
            resposta.err = true
            resposta.msg = 'Ocorreu um erro no IF(getall)'
            resposta.errorMessage = err
        } else {
            resposta.dados = data
            resposta.msg = 'Sucesso ao receber dados'
        }

        res.json(resposta)
    })
})


router.post('/', function (req, res, next) {
    FarmaciaModel.post(req.body, function (err, data) {
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


router.put('/', function (req, res, next) {
    FarmaciaModel.put(req.body, function (err, data) {
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
    FarmaciaModel.delete(req.params.id, function (err, data) {
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