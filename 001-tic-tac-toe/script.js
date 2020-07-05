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


changeTheme('dark');
createThemeButtons();
showScreen('menu');
