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

var players = [];
var currentPlayer = null;
var board = ['', '', '', '', '', '', '', '', ''];
var currentMode = {
  numberOfPlayers: null,
  playerSymbol: null
}
var winnerMessage = '';

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
  currentMode["numberOfPlayers"] = numberOfPlayers;
  currentMode["playerSymbol"] = playerSymbol;
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
  underlinePlayer(players[currentPlayer].symbol);
  resetBoard();
}


function resetBoard () {
  for (let i = 0; i < 9; i++) {
    board[i] = '';
    var tile = document.getElementById('tile-' + i);
    tile.innerHTML = '';
  }
  var tiles = document.getElementsByClassName('tile');
  for (var tile of tiles) {
    tile.addEventListener('click', makeMove);
  }
}


function makeMove (event) {
  var tile = event.target;
  var tileId = event.target.id;
  tileId = parseInt(tileId.split('-')[1]);
  var currentPlayerSymbol = players[currentPlayer].symbol;
  tile.innerHTML = currentPlayerSymbol;
  board[tileId] = currentPlayerSymbol;
  checkGameEnd(currentPlayer);
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
  var newCurrentPlayerSymbol = players[currentPlayer].symbol;
  underlinePlayer(newCurrentPlayerSymbol);
  tile.removeEventListener('click', makeMove);
}

function underlinePlayer (currentPlayerSymbol) {
  const playerX = document.getElementById('player-x');
  const playerO = document.getElementById('player-o');
  if (currentPlayerSymbol === 'X') {
    playerX.classList.add('current-player');
    playerO.classList.remove('current-player');
  } else {
    playerO.classList.add('current-player');
    playerX.classList.remove('current-player');
  }
}


function checkGameEnd (currentPlayer) {
  if ( board[0] === board[1] && board[1] === board[2] && board[2] !== ''
    || board[3] === board[4] && board[4] === board[5] && board[5] !== ''
    || board[6] === board[7] && board[7] === board[8] && board[8] !== ''
    || board[0] === board[3] && board[3] === board[6] && board[6] !== ''
    || board[1] === board[4] && board[4] === board[7] && board[7] !== ''
    || board[2] === board[5] && board[5] === board[8] && board[8] !== ''
    || board[0] === board[4] && board[4] === board[8] && board[8] !== ''
    || board[2] === board[4] && board[4] === board[6] && board[6] !== ''
  ) {
    winnerMessage = `Player ${players[currentPlayer].symbol} is winner`;
    showScreen('results');
    document.getElementById('winner-message').innerHTML = winnerMessage;
  } else {
    var emptyTiles = board.filter(function(e) {return e === ""});
    if (emptyTiles.length === 0) {
      winnerMessage = `It's a draw`;
      showScreen('results');
      document.getElementById('winner-message').innerHTML = winnerMessage;
    }
  }
}

changeTheme('dark');
createThemeButtons();
showScreen('menu');
// selectMode(2, 'X');
// showScreen('results');
