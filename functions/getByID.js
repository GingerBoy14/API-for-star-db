const firebase = require("../firebaseDB");
const db = firebase.firestore();

function getByID(name, res, id) {
    db.collection(name)
        .doc(id)
        .get()
        .then((doc) =>{
            res.send(doc.data());
        })
        .catch(() =>{
            res.sendStatus(404);
        });
}

module.exports = {getByID};