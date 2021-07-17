const express = require('express')
const router = express.Router()
const actorModel = require('../models/actor.model')

//get list
router.get('/', async function (req, res) {
    const rows = await actorModel.findAll()
    res.json(rows)
})

//getbyid
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const actor = await actorModel.findById(id)

    if (actor < 1) {
        res.status(400).json({
            "message": "Not found"
        });
    }
    res.json(actor)
})

//insert
router.post('/', async function (req, res) {
    const actor = req.body
    const result = await actorModel.add(actor)
    actor.actor_id = result[0];
    res.status(201).json(actor);
})

//update
router.patch('/:id', async function (req, res) {
    const id = req.params.id;
    const actor = req.body
    const result = await actorModel.update(id,actor)
    if(result < 1){
        res.json({
            "message": "Can not update"
        })
    }
    res.status(201).json(actor);
})

//delete
router.delete('/:id', async function (req, res) {
    const id = req.params.id || 0;
    const result = await actorModel.delete(id)
    if(result === 0){
        res.status(400).json({
            "message": "Can not delete"
        });
    }
    res.status(200).json({
        "message": "Delete successfull"
    });
})

module.exports = router