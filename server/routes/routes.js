const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

///GET route/router created to get list of feedback from DB
router.get('/', (req, res) => {
    console.log('GET prime_feedback');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET prime_feedback', error)
        res.sendStatus(500);
    });
});

/// POST route/router to update new feedback in the DB
router.post('/', (req, res) => {
    console.log('POST prime_feedback');
    const newFeedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
            console.log('added newFeedback to DB', newFeedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making DB query ${sqlText}`, error);
            red.sendStatus(500);
        })
})

/// DELETE route/Router that will remove line of feedback from DB and update the admin page
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            console.log('feedback deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;