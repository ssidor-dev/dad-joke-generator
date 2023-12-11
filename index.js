"use strict";

// Instance field for getting queries from HTML doc
const button = document.querySelector(".get-joke");
const jokeSpace = document.querySelector(".dad-joke");

const saveJokeBtn = document.querySelector(".save-joke");

const savedJokeSpace = document.querySelector(".saved-jokes");

const clearBtn = document.querySelector(".clear-btn");

const allLiItems = document.getElementsByTagName("li");

// Async function that gets dad joke from API using Axios

const getDadJoke = async () => {
  const header = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", header);
  jokeSpace.innerHTML = res.data.joke;
};

// savedDadJokes function that created a new element and node
// Saves joke to list for up to 4 jokes

function savedDadJokes() {
  if (allLiItems.length < 4) {
    let newLi = document.createElement("li");
    //let newLiItem = document.createTextNode(jokeSpace.textContent);

    //window.localStorage.setItem("savedJoke", jokeSpace.textContent);
    newLi.innerHTML = jokeSpace.textContent;

    //newLi.appendChild(newLiItem);
    savedJokeSpace.appendChild(newLi);
  } else {
    clearBtn.classList.add("clear-btn-warning");
  }
  // Add saved joke to localStorage
  localStorage.setItem("savedJoke", savedJokeSpace.innerHTML);
 
}

// clearSavedJokes function that allows user to clear list of saved joked

function clearSavedJokes() {
  window.localStorage.clear();
  clearBtn.classList.remove("clear-btn-warning")
  for (let i = 0; i < allLiItems.length; i * 2) {
    allLiItems[i].remove();
  }
}

// Event listeners to respond to click events

saveJokeBtn.addEventListener("click", savedDadJokes);

button.addEventListener("click", getDadJoke);

clearBtn.addEventListener("click", clearSavedJokes);


savedJokeSpace.innerHTML = localStorage.getItem("savedJoke");

