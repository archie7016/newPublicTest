const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/api/server', (req, res) => {
    res.send("Hello from server");
});

app.get('/api/welcome', (req, res) => {
    console.log("Welcome to the new app");
    console.log("Hello World!");
    res.send('<h1>Hello World!</h1>');

})

app.listen(PORT, () => {
    console.log("Server running on localhost::", PORT);
});