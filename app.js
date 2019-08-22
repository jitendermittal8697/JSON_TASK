const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/getJSON', function(req,res) {
    res.sendFile(__dirname + '/jsondata.json');
})

app.listen(3001, () => {
    console.log('App is listening on port 3001');
});