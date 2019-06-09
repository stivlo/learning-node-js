const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

function init() {
    const location = localStorage.getItem('location');
    if (location) {
        search.value = location;
        updateWeather(location);
    }
}

weatherForm.addEventListener('submit', (event) => {
    const location = search.value;
    localStorage.setItem('location', location);
    updateWeather(location);
    event.preventDefault();
});

function updateWeather(location) {
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        });
    });
}

init();
