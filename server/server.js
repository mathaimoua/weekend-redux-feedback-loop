const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `
    values = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    pool.query(queryText, values)
        .then(response =>{
            console.log(response)
            res.sendStatus(201)
        }).catch(err=>{
            console.log(err)
        })
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});