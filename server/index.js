const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json({extended: false}));
app.use(express.static(path.resolve(__dirname, '../client/index.html')));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}`));