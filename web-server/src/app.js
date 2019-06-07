const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// set up handlebars engine and views location
hbs.registerPartials(path.join(__dirname, '../templates/partials'));
app.set('views', path.join(__dirname, '../templates/views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Stefano Locati'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Stefano Locati'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Helpful message',
        name: 'Stefano Locati'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'London',
        forecast: 'Good weather'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help article Not Found',
        name: 'Stefano Locati'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page Not Found',
        name: 'Stefano Locati'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
