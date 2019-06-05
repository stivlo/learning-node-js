const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Helpful message'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'London',
        forecast: 'Good weather'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
