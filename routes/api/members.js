const express = require('express');
const members = require('../../Members') // .. outside api folder .. outside routes folder 
const uuid = require('uuid')



const router = express.Router()

// get all members
router.get('/', (req, res) => res.json(members))

// get a specific elem
router.get('/:id', (req, res) => {

    const found = members.some((member) => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }
})
