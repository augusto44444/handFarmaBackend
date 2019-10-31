const express = require('express')
const bodyparser = require('body-parser')
const AllowCors = require('./configs/Cors')
const server = express()
const router = express.Router();
const port = process.env.PORT || 3000


server.use(AllowCors);
server.use(bodyparser.urlencoded({ extended: true }))
server.use(bodyparser.json())

const usuarioRouter = require('./routes/usuario')
const FarmaciaRouter = require('./routes/farmaciaRouter')
const ProdutoRouter = require('./routes/produtoRoutes')
const produtoFarmaciaRouter = require('./routes/produtoFarmaciaRouter')

router.get('/', (req, res, next) => {
    res.json({
        message: "Api Rodando"
    })
})

server.use('/', router)
server.use('/usuario', usuarioRouter)
server.use('/Farmacia', FarmaciaRouter)
server.use('/produto', ProdutoRouter)
server.use('/produtoFarmacia', produtoFarmaciaRouter)


server.listen(port, () => {
    console.log("Servidor rodando na porta: " + port)
})