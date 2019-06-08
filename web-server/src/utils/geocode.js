const request = require('request');

const geocode = (address, callback) => {
    const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const geoKey = 'pk.eyJ1Ijoic3RpdmxvIiwiYSI6ImNqd2YxZ20wNTBuY3MzeXBiMWo3MWJ6ZWwifQ.vPtAl86X6alHAQtUYAUOSA';
    const url = baseUrl + encodeURIComponent(address) + '.json?limit=1&access_token=' + geoKey;
    request({ url, json: true }, (error, { statusCode, body }) => {
        if (error) {
            callback('Unable to connect to geolocation service');
        } else if (statusCode / 100 != 2 || body.features.length == 0) {
            callback('Unable to find location. Try another search.');
        } else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name
            callback(undefined, { latitude, longitude, location });
        }
    });
};

module.exports = geocode;
