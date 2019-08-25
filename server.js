const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const path = require('path')

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'public/templates/index.html');
});
app.get('/page1', (req, res) => {
    res.sendFile('public/templates/page1.html', { root: path.join(__dirname, './') });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!\n /`));
