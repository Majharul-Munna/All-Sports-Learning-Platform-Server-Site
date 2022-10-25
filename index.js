const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

const topics = require('./data/topics.json')

app.get('/', (req, res) => {
    res.send('Course API running');
});

app.get('/courses', (req, res) => {
    res.send(topics)
})

app.listen(port, () => {
    console.log('learn with ex running on port', port);
})