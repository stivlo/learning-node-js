const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
    console.log('Please provide an address in quotes');
} else {
    geocode(address, (error, geolocation) => {
        if (error) {
            return console.log(error);
        }
        forecast(geolocation.latitude, geolocation.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log('Weather for ' + geolocation.location + '. ' + forecastData);
        });
    });    
}


