const request = require('request');

const geocode = (address, callback) => {
    const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const geoKey = 'pk.eyJ1Ijoic3RpdmxvIiwiYSI6ImNqd2YxZ20wNTBuY3MzeXBiMWo3MWJ6ZWwifQ.vPtAl86X6alHAQtUYAUOSA';
    const geoUrl = baseUrl + encodeURIComponent(address) + '.json?limit=1&access_token=' + geoKey;
    request({ url: geoUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geolocation service');
        } else if (response.statusCode / 100 != 2 || response.body.features.length == 0) {
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
