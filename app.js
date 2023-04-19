const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views')


app.get('/', function (req, res) {
    res.render('index', {

    })
});

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});