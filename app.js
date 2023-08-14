const express = require('express');
const path = require('path');
const app = express();

const port = 3500;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const homePage = (path.join(process.cwd(), '/public/index.html'));
    res.sendFile(homePage);
});

app.get('/about', (req, res) => {
    const aboutPage = (path.join(process.cwd(), '/public/about.html'));
    res.sendFile(aboutPage);
});

app.listen(port, () => {
    console.log('App listening on port ', port);
});