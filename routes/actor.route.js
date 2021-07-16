const express = require('express')
const router = express.Router()
const actorModel = require('../models/actor.model')

router.get('/', async function (req, res) {
    const rows = await actorModel.findAll()
    res.json(rows)
})

router.get('/details', async function (req, res) {
    const id = +req.query.id || 0
    const actor = await actorModel.findById(id)

    if(actor == null){
        return res.status(204).end()
    }
    res.json(actor)
})

router.post('/add', async function(req,res){
    const actor = req.body 
    await actorModel.add(actor)
    res.json(actor)

})

module.exports = router