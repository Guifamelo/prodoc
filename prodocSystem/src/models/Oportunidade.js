const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    nome_cliente: {
        type: String,
        required: true
    },
    documento_cliente: {
        type: Number,
    },
    estado_civil_cliente: {
        type: String,
    },
    endereco_cliente: {
        type: String,
    },
    tipo_ativo: {
        type: String,
    },
    valor_do_ativo: {
        type: Number,
    },
    valor_de_venda: {
        type: Number,
    },
    comissao_prodoc: {
        type: Number,
    },
    comissao_parceiro: {
        type: Number,
    },
    numero_processo: {
        type: Number,
    }
})

module.exports = mongoose.model('Oportunidade', Schema);