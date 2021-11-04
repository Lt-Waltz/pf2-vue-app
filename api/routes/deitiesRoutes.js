const express = require('express');
const router = express.Router();

const deities = require('../data/deities.js')

/**
 * Get route for all data inside the deities file.
 */
router.get('/', async function (req, res) {
    res.json(deities);
})

/**
 * Get data for singular deities
 */
router.get('/:id([0-9]{3,})', async function (req, res) {
    const currDeity = deities.filter(function(deity) {
        if(deity.id == req.params.id) {
            return true;
        }
    });
    if(currDeity.length === 1) {
        res.json(currDeity[0])
    } else {
        res.status(404);
        res.json({message: "Not Found"});
    }
})


/**
 * Post route for adding deities.
 */
router.post('/', async function (req, res) {
    //Check if all fields are provided and valid:
    if(!req.body.name ||
        !req.body.title ||
        !req.body.alignment ||
        !req.body.followers ||
        !req.body.font ||
        !req.body.skill ||
        !req.body.domain ||
        !req.body.weapon ||
        !req.body.story ||
        !req.body.edicts ||
        !req.body.anathema ||
        !req.body.areas ||
        !req.body.spells) {
            res.status(400).send({message: "Bad Request"});
        } else {
            const newID = deities[deities.length-1].id+1;
            deities.push({
                id: newID,
                name: req.body.name,
                title: req.body.title,
                category: "Gods of Ettra",
                alignment: req.body.alignment,
                followers: req.body.followers,
                font: req.body.font,
                skill: req.body.skill,
                domain: req.body.domain,
                weapon: req.body.weapon,
                story: req.body.story,
                edicts: req.body.edicts,
                anathema: req.body.anathema,
                areas: req.body.areas,
                spells: req.body.spells
            });
            res.status(200).send({message: "New Deity created."});
        }
    
})

/**
 * Update route.
 * 
 */
router.put('/:id', async function (req, res) {
    //Check if all provided fields are valid.
    if(!req.body.name ||
        !req.body.title ||
        !req.body.alignment ||
        !req.body.followers ||
        !req.body.font ||
        !req.body.skill ||
        !req.body.domain ||
        !req.body.weapon ||
        !req.body.story ||
        !req.body.edicts ||
        !req.body.anathema ||
        !req.body.areas ||
        !req.body.spells) {
            res.status(400).send({message: "Bad Request"});
    } else {

        /**
         * Gets the deity ID with which the update can be made.
         */
        const updateIndex = deities.map((deity) => {
            return deity.id;
        }).indexOf(parseInt(req.params.id))

        if(updateIndex === -1) {
            //Deity not found, create a new one
            deities.push({
                id: req.params.id,
                name: req.body.name,
                title: req.body.title,
                category: "Gods of Ettra",
                alignment: req.body.alignment,
                followers: req.body.followers,
                font: req.body.font,
                skill: req.body.skill,
                domain: req.body.domain,
                weapon: req.body.weapon,
                story: req.body.story,
                edicts: req.body.edicts,
                anathema: req.body.anathema,
                areas: req.body.areas,
                spells: req.body.spells
            });
            res.status(200).send({message: "New Deity added."});
        } else {
            //Update the found deity
            deity[updateIndex] = {
                id: req.params.id,
                name: req.body.name,
                title: req.body.title,
                category: "Gods of Ettra",
                alignment: req.body.alignment,
                followers: req.body.followers,
                font: req.body.font,
                skill: req.body.skill,
                domain: req.body.domain,
                weapon: req.body.weapon,
                story: req.body.story,
                edicts: req.body.edicts,
                anathema: req.body.anathema,
                areas: req.body.areas,
                spells: req.body.spells
            };
            res.status(200).send({message: `Deity with ID: ${req.params.id}, was updated`})
        }
    }
})

/**
 * Delete route for a deity
 */
router.delete('/:id', async function (req, res) {
    /**
     * Gets the deity ID with which the deletion can be made.
     */
    const deleteIndex = deities.map((deity) => {
        return deity.id;
    }).indexOf(parseInt(req.params.id));  //Index of the deity with the given id.

    /**
     * Checks whether the ID was found.
     */
    if(deleteIndex === -1) {
        res.status(404).send({message: "Not found"});
    } else {
        /**
         * Removes the deity from the deleteIndex spot
         */
        deities.splice(deleteIndex, 1);
        res.status(200).send({message: `Deity with ID: ${req.params.id} removed`})
    }
})


module.exports = router;