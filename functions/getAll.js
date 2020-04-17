const firebase = require("../firebaseDB");
const db = firebase.firestore();

function getAll(name,res) {
    db.collection(name)
        .get()
        .then((querySnapshot) =>{
            res.send(querySnapshot.docs.map(doc =>  doc.data()));
        })
        .catch(() =>{
            res.sendStatus(404);
        });
}

module.exports = {getAll};