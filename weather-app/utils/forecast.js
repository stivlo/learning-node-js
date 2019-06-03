const request = require('request');

const forecast = (lat, long, callback) => {
    const weatherKey = '820c6ff6235d3223e159c1be2c694253';
    const weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${lat},${long}?units=si&lang=en`;
    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (response.statusCode / 100 != 2) {
            callback('Unable to find location');
        } else {
            const currently = response.body.currently;
            callback(undefined, response.body.daily.data[0].summary +
                ` ${currently.temperature} C. ` +
                ` ${currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;
