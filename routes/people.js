const express = require('express');
const router = express.Router();

const firebase = require("../firebaseDB");
const db = firebase.firestore();


const {getSize} = require("../functions/getSize");
const {getAll} = require("../functions/getAll");
const {getByID} = require("../functions/getByID");

//get ALL
router.get('/', (req, res) => {
 getAll("People",res);
});

//get by ID
router.get('/:id', (req, res) => {
    getByID("People",res,req.params.id.toString());
});


router.post("/",async (req,res)=>{
    db.collection("People")
        .doc(await getSize("People"))
        .set(req.body);
    res.sendStatus(200);
});

module.exports = router;
