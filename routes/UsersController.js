const express = require('express');
const router = express.Router()
const { UserModel } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.json(users)
    }
    catch (err) {
        res.send.err
    }
})

router.get('/:id', async (req, res) => {
    console.log("route hit ")
    try {
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new UserModel(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router