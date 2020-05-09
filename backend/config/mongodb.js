const mongoose = require('mongoose')
const { mongod } = require('../.env')
mongoose.connect(mongod.connection, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! não foi possível conectar com Mongo'
        console.log('\x1b[41m%s]\x1b[37m', msg, '\x1b[0m')
    })





