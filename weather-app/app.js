const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


// geocode('97 York Way London', (error, data) => {
//     console.log('error:', error);
//     console.log('data:', data);
// });


forecast(44.1545, -75.7088, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
});
