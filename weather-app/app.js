const request = require('request');

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

// geocoding
const location = '97 York Way London';
const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const geoKey = 'pk.eyJ1Ijoic3RpdmxvIiwiYSI6ImNqd2YxZ20wNTBuY3MzeXBiMWo3MWJ6ZWwifQ.vPtAl86X6alHAQtUYAUOSA';
const geoUrl = baseUrl + encodeURIComponent(location) + '.json?limit=1&access_token=' + geoKey;
request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geolocation service');
    } else if (response.statusCode / 100 != 2 || response.body.features.length == 0) {
        console.log('Unable to find location. Try another search.');
    } else {
        const features = response.body.features;
        const latitude = features[0].center[1];
        const longitude = features[0].center[0];
        console.log('latitude: ' + latitude + ', longitude: ' + longitude);
    }
});
