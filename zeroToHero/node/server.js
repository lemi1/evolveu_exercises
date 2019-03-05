const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('hey hey')
})

app.listen(4000);

