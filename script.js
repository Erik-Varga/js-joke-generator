// Variables
var emojiList = ['&#128512', '&#128515', '&#128516', '&#128513', '&#128518', '&#128517', '&#129315', '&#128514', '&#128578', '&#128580'];
var display = document.getElementById('emojiDisplay');

const jokeContainer = document.getElementById('joke-container');
const jokeBtn = document.getElementById('joke-btn');

const API_URL = 'https://icanhazdadjoke.com/';

// Functions
function displayEmoji() {
  let randomEmojiIndex = Math.floor(Math.random() * emojiList.length);
  emoji = emojiList[randomEmojiIndex];
  display.innerHTML = `<h2>${emoji}</h2>`;
}

async function getJoke() {
  const res = await fetch(API_URL, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const date = await res.json();
  jokeContainer.innerHTML = date.joke;
  displayEmoji();
}

jokeBtn.addEventListener('click', getJoke);

// Onload
getJoke();
displayEmoji();