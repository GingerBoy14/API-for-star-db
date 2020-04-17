const express = require('express');
const router = express.Router();
const firebase = require("../firebaseDB");
const db = firebase.firestore();

const {getSize} = require("../functions/getSize");
const {getAll} = require("../functions/getAll");
const {getByID} = require("../functions/getByID");

router.get('/', (req, res) => {
    getAll("Planets",res);
});

//get by ID
router.get('/:id', (req, res) => {
    getByID("Planets",res,req.params.id.toString());
});

router.post("/",async (req,res)=>{
    db.collection("Planets")
        .doc(await getSize("Planets"))
        .set(req.body);
    res.sendStatus(200);
});

module.exports = router;