// This file is for add and get NOTES

const express = require("express")
const router = express.Router()
const Note = require("../models/notes")
const { body, validationResult } = require('express-validator');
const fetchUser = require("../middlewere/fetchUser")

// Here all Notes are inserted using "http://localhost:5000/api/notes/insertNotes"
router.post("/insertNotes" , fetchUser ,[
    // validation parameter settings
    body('title', "Enter  minimum 4 character Title").notEmpty().isLength({ min: 4 }),
    body('description', "Enter  minimum 4 character Description").isLength({ min: 4 })
], async (req,res)=>{
    try {
        const {title,description,tag} = req.body
        // input notes validation checked
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ arrors: error.array() })
        }
        // input note saved in out NOOTES Schema including user ID
        const notes = new Note({
            title,description,tag,user:req.user.id
        })
        const saveNotes = await notes.save()
        res.json(saveNotes)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Some Error Occured..")
    }
})

// Here all Notes are fetched using "http://localhost:5000/api/notes/fetchAllNotes"
router.get("/fetchAllNotes",fetchUser,
async (req,res)=>{
    try {
        // ALl notes are fetched by the help of User ID
        const notes = await Note.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})


// Here we can update a Note using a NOTES ID "http://localhost:5000/api/notes/updateNotes/:id"
router.put("/updateNotes/:id",fetchUser,
async (req,res)=>{
    try {
        const {title,description,tag} = req.body
        const newNote = {}
        if (title) { newNote.title = title}
        if (description) { newNote.description = description}
        if (tag) { newNote.tag = tag}
        let note = await Note.findById(req.params.id)

        if (!note) {return res.status(404).send("Note not found")}
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, {new: true })
        res.json({ note })



    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})


// Here we can delete an existing Note using a NOTES ID "http://localhost:5000/api/notes/deleteNotes/:id"
router.delete("/deleteNotes/:id",fetchUser,
async (req,res)=>{
    try {
        let note = await Note.findById(req.params.id)

        if (!note) {return res.status(404).send("Note not found")}
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success":"successfully note was deleted",note:note })



    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})

module.exports = router
