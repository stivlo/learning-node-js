const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const weatherKey = '820c6ff6235d3223e159c1be2c694253';
    const url = `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}?units=si&lang=en`;
    request({ url, json: true }, (error, { statusCode, body }) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (statusCode / 100 != 2) {
            callback('Unable to find location');
        } else {
            callback(undefined, body.daily.data[0].summary +
                ` ${body.currently.temperature} C. ` +
                ` ${body.currently.precipProbability * 100}% chance of rain.`);
        }
    });
};

module.exports = forecast;
