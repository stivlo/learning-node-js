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
    const messageOne = document.querySelector('#message-1');
    const messageTwo = document.querySelector('#message-2');
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
                messageTwo.textContent = '';
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
}

init();
