const express = require('express');
const router = express.Router();
const firebase = require("../firebaseDB");
const db = firebase.firestore();

const {getSize} = require("../functions/getSize");
const {getAll} = require("../functions/getAll");
const {getByID} = require("../functions/getByID");


router.get('/', (req, res) => {
    getAll("Starships",res);
});

//get by ID
router.get('/:id', (req, res) => {
    getByID("Starships",res,req.params.id.toString());
});

router.post("/",async (req,res)=>{
    db.collection("Starships")
        .doc(await getSize("Starships"))
        .set(req.body);
    res.sendStatus(200);
});

module.exports = router;