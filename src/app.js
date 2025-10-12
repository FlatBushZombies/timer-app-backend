import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Timer Blockkk API Guide')
})

export default app; 