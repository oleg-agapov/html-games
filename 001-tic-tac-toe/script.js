var screens = ['menu', 'settings', 'select-mode', 'game', 'results'];

var themes = {
  'Dark': {
    'menu':        'rgb(155, 55, 55)',
    'settings':    'rgb(55, 155, 55)',
    'select-mode': 'rgb(55, 55, 155)',
    'game':        'rgb(155, 155, 155)',
    'results':     'rgb(27, 155, 112)',
  },
  'Light': {
    'menu':        'rgb(225, 155, 155)',
    'settings':    'rgb(155, 255, 155)',
    'select-mode': 'rgb(155, 155, 255)',
    'game':        'rgb(255, 255, 255)',
    'results':     'aquamarine',
  },
  'Green': {
    'menu':        'rgb(155, 255, 155)',
    'settings':    'rgb(155, 255, 155)',
    'select-mode': 'rgb(155, 255, 155)',
    'game':        'rgb(155, 255, 155)',
    'results':     'rgb(155, 255, 155)',
  },
}

players = [];
currentPlayer = null;

function changeTheme (themeName) {
  var themeValues = themes[themeName];
  for (var screen in themeValues) {
    var el = document.getElementById(screen);
    el.style.backgroundColor = themeValues[screen];
  }
}

function createThemeButtons () {
  var container = document.getElementById('theme-buttons-container');
  for (var themeName in themes) {
    container.innerHTML += `<button onclick="changeTheme('${themeName}')">${themeName}</button>`
  }
}

function hideAllScreens () {
  for (let i = 0; i < screens.length; i++) {
    var el = document.getElementById(screens[i]);
    el.style.display = 'none';
  }
}

function showScreen (screenName) {
  hideAllScreens();
  var el = document.getElementById(screenName);
  el.style.display = 'flex';
}

function selectMode (numberOfPlayers, playerSymbol) {
  var secondPlayerSymbol = '';
  if (playerSymbol === 'X') secondPlayerSymbol = 'O';
  if (playerSymbol === 'O') secondPlayerSymbol = 'X';
  if (numberOfPlayers === 1) {
    players = [
      { type: 'human', symbol: playerSymbol},
      { type: 'computer', symbol: secondPlayerSymbol},
    ];
  } else {
    players = [
      { type: 'human', symbol: playerSymbol},
      { type: 'human', symbol: secondPlayerSymbol},
    ];
  }
  if (Math.random() > 0.5) {
    currentPlayer = 0;
  } else {
    currentPlayer = 1;
  }
  showScreen('game');
}


var tiles = document.getElementsByClassName('tile');
for (var tile of tiles) {
  tile.addEventListener('click', makeMove)
}

let element = document.getElementById('header');

function makeMove (event) {
  var tile = event.target;
  var tileId = event.target.id;
  var currentPlayerSymbol = players[currentPlayer].symbol;
  tile.innerHTML = currentPlayerSymbol;
  underlinePlayer(currentPlayerSymbol);
  
}

const Player_X = document.createElement(`p`);
Player_X.textContent = `Player X`;

const Player_O = document.createElement(`p`);
Player_O.textContent = `Player O`;

element.appendChild(Player_X);
element.appendChild(Player_O);

function underlinePlayer (PlayerSymbol) {
  if (PlayerSymbol === 0) {
    Player_X.classList.add(`currentPlayer`);
    Player_O.classList.remove(`currentPlayer`);}
  else {
    Player_O.classList.add(`currentPlayer`);
    Player_X.classList.remove(`currentPlayer`);}
  }

changeTheme('dark');
createThemeButtons();
showScreen('menu');