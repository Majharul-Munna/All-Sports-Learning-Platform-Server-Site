const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

const topics = require('./data/topics.json');
// const details = require('./data/details.json');

app.get('/', (req, res) => {
    res.send('Course API running');
});

app.get('/courses', (req, res) => {
    res.send(topics)
});

app.get('/details/:id', (req, res) =>{
    // console.log(details);
    const  id=req.params.id;
    const createData=topics.find(n=> n.id==id)
    res.send(createData)
})


app.listen(port, () => {
    console.log('ex surver running on port', port);
})