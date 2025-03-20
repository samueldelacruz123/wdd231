// Current Weather and Weather Forecast display feature

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const forecastTemp = document.querySelector("#forecast-temp");

// OpenWeatherMap API URLs
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=16.24&lon=121.02&appid=b0df2ca51ef3a01dbc93f6900cd0a981&units=metric";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=16.24&lon=121.02&appid=b0df2ca51ef3a01dbc93f6900cd0a981&units=metric";

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw new Error("Weather data not available");
        }
    } catch (error) {
        console.log(error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error("Forecast data not available");
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}°C`;

    // Define the mapping inside the function
    const weatherMapping = {
        "Clear": "clear.png",
        "Clouds": "cloudy.png",
        "Rain": "rain.png",
        "Snow": "snow.png",
        "Thunderstorm": "thunderstorm.png"
    };

    const weatherCondition = data.weather[0].main; // Get main condition (e.g., Clear, Clouds, Rain)
    const iconFilename = weatherMapping[weatherCondition] || "clear.png"; // Default to "clear.png" if no match
    const iconSrc = `icons/${iconFilename}`; // Path to your local icons

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
}

function displayForecast(data) {
    const days = ["Today", "Tomorrow", "After Tomorrow"];
    let forecastHTML = "";

    // Get forecast data at the same time of day for consistency
    for (let i = 0; i < 3; i++) {
        const index = i * 8; // Every 8 entries = 1 day
        if (data.list[index]) {
            const temp = data.list[index].main.temp.toFixed(1);
            forecastHTML += `<p><strong>${days[i]}:</strong> ${temp}°C</p>`;
        }
    }

    forecastTemp.innerHTML = forecastHTML;
}

// Call both functions
getWeather();
getForecast();

// Business Spotlight display feature

document.addEventListener("DOMContentLoaded", async () => {
    await loadSpotlightMembers();
});

async function loadSpotlightMembers() {
    try {
        const response = await fetch("data/members.json");
        if (response.ok) {
            const members = await response.json();
            
            // Filter only Gold (3) or Silver (2) members
            const eligibleMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

            // Shuffle and select 3 members
            const spotlightMembers = getRandomMembers(eligibleMembers, 3);

            displaySpotlightMembers(spotlightMembers);
        } else {
            throw new Error("Failed to load members data.");
        }
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

// Function to get a random number of members (exactly 3)
function getRandomMembers(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, count);
}

// Function to display spotlight members
function displaySpotlightMembers(members) {
    const spotlightContainer = document.querySelector("#spotlight");
    spotlightContainer.innerHTML = ""; // Clear previous content

    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("spotlight-card");

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel === 3 ? "Gold" : "Silver"}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(memberCard);
    });
}