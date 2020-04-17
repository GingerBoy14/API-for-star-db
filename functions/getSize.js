const firebase = require("../firebaseDB");
const db = firebase.firestore();

 async function getSize(name){
    return await db.collection(name)
        .get()
        .then(snap => {
            return (snap.size+1).toString();
        });
}
module.exports = {getSize};
