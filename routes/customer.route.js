const express = require('express')
const router = express.Router()
const customerModel = require('../models/customer.model')

//get list
router.get('/', async function (req, res) {
    const rows = await customerModel.findAll()
    res.json(rows)
})

//getbyid
router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const customer = await customerModel.findById(id)

    if (customer < 1) {
        res.status(400).json({
            "message": "Not found"
        });
    }
    res.json(customer)
})

//insert
router.post('/', async function (req, res) {
    const customer = req.body
    const result = await customerModel.add(customer)
    customer.customer_id = result[0];
    res.status(201).json(customer);
})

//update
router.patch('/:id', async function (req, res) {
    const id = req.params.id;
    const customer = req.body
    const result = await customerModel.update(id,customer)
    if(result < 1){
        res.json({
            "message": "Can not update"
        })
    }
    res.status(201).json(customer);
})

//delete
router.delete('/:id', async function (req, res) {
    const id = req.params.id || 0;
    const result = await customerModel.delete(id)
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