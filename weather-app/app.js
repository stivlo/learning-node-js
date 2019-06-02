const request = require('request');
const geocode = require('./utils/geocode');

// weather
// const weatherKey = '820c6ff6235d3223e159c1be2c694253';
// const lat = 51.545523;
// const long = -0.126658;
// const weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${long}?units=si&lang=it`;
// request({ url: weatherUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service');
//     } else if (response.statusCode / 100 != 2) {
//         console.log('Unable to find location');
//     } else {
//         const currently = response.body.currently;
//         console.log(response.body.daily.data[0].summary +
//             ` It is currently ${currently.temperature} degrees out. ` +
//             `There is a ${currently.precipProbability}% chance of rain.`);
//     }
// });


geocode('97 York Way London', (error, data) => {
    console.log('error:', error);
    console.log('data:', data);
});
