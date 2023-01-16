const Oportunidade = require('../models/Oportunidade');

const oportunidadeController = {
    async createOportunidade(req,res) {
        var bodyData = req.body;
        try {
            const newOportunidade = await Oportunidade.create(bodyData);
            console.log(newOportunidade);
            return res.status(200).json(newOportunidade);
            
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async getOportunidades(req, res){
        try {
            const oportunidades = await Oportunidade.find();
            return res.status(200).json(oportunidades);
        } catch (err) {
            return res.status(400).json(err);            
        } 
    },
    async getOportunidadeById(req,res){
        const { oportunidade_id } = req.params

        try {
            const oportunidade = await Oportunidade.findById(oportunidade_id)
            return res.status(200).json(oportunidade)
        } catch (err) {
            return res.status(400).send(err)
            
        }

    }

}
module.exports = oportunidadeController;