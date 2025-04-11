// Footer Year and Last Modified Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Toggle the active class when the hamburger is clicked
document.getElementById('hamburger-menu').addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    navbar.classList.remove('active');
  }
});

// Modular Setup Only: Load Random Character
document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayRandomCharacter("data/character.json", "character-display");
});

/**
 * Fetches a character JSON file and displays a random character
 * @param {string} jsonPath - Path to the JSON file
 * @param {string} containerId - ID of the HTML element to inject content into
 */
function fetchAndDisplayRandomCharacter(jsonPath, containerId) {
  const displayContainer = document.getElementById(containerId);

  fetch(jsonPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch character data.");
      }
      return response.json();
    })
    .then((data) => {
      const character = getRandomCharacter(data);
      displayCharacter(character, displayContainer);
    })
    .catch((error) => {
      console.error("Error loading character:", error);
      displayContainer.innerHTML = `
        <p class="error-message">⚠️ Oops! Unable to load character data. Please check your connection or try again later.</p>
      `;
    });
}

/**
 * Returns a random character from the array
 * @param {Array} characters 
 * @returns {Object}
 */
function getRandomCharacter(characters) {
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

/**
 * Injects character data into a container
 * @param {Object} character 
 * @param {HTMLElement} container 
 */
function displayCharacter(character, container) {
  container.innerHTML = ""; // Clear previous content

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;

  // ✅ Add fallback image
  img.onerror = () => {
    img.src = "images/default.webp";
    img.alt = "Default Character";
  };

  const name = document.createElement("h3");
  name.textContent = character.name;

  const desc = document.createElement("p");
  desc.textContent = character.description;

  container.appendChild(img);
  container.appendChild(name);
  container.appendChild(desc);
}

// Get weather API
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.0809&lon=-81.0912&appid=b0df2ca51ef3a01dbc93f6900cd0a981&units=metric';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}
