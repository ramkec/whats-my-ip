
const lookupBtn = document.querySelector(".btn");
const ipDisplay = document.querySelector(".ip-display");
const versionDisplay = document.querySelector(".version");
const cityDisplay = document.querySelector(".city");
const regionDisplay = document.querySelector(".region");
const countrynameDisplay = document.querySelector(".country-name");
const countrycodeDisplay = document.querySelector(".country-code");
const countrycallingcodeDisplay = document.querySelector(".country-calling-code");
const currencyDisplay = document.querySelector(".currency");
const orgDisplay = document.querySelector(".org");
const hostDisplay = document.querySelector(".host-name");

var map = L.map('map').setView([48.5, 4.29], 4);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=jdtN6S3WyVHbXudCXjZr', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

lookupBtn.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then(response => {

        ipDisplay.textContent = `IP Address: ${response.data.ip}`;
        versionDisplay.textContent = `Version: ${response.data.version}`;
        cityDisplay.textContent = `City: ${response.data.city}`;
        regionDisplay.textContent = `Region: ${response.data.region}`;
        countrynameDisplay.textContent = `Country: ${response.data.country_name}`;
        countrycodeDisplay.textContent = `Country Code: ${response.data.country_code}`;
        countrycallingcodeDisplay.textContent = `Country Calling Code: ${response.data.country_calling_code}`;
        currencyDisplay.textContent = `Currency: ${response.data.currency}`;
        orgDisplay.textContent = `Org: ${response.data.org}`;
        hostDisplay.textContent = `Hostname: ${response.data.org}`;

        L.marker([`${response.data.latitude}`, `${response.data.longitude}`]).addTo(map);
        map.setView([`${response.data.latitude}`, `${response.data.longitude}`], 13);
    });
});
