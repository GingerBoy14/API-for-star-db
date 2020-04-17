const express = require('express');
const bodyParser = require('body-parser');

const peopleRouter = require('./routes/people');
const planetsRouter = require('./routes/planets');
const starShipsRouter = require('./routes/starships');

const app = express();


//for post method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/people', peopleRouter);
app.use('/planets', planetsRouter);
app.use('/starships', starShipsRouter);

app.listen(5000, ()=>{
  console.log('API app started');
});