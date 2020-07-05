var screens = ['menu', 'settings', 'select-mode', 'game', 'results'];

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

showScreen('menu');

function darkTheme (screenName1,screenName2,screenName3,screenName4,screenName5) {
  var el = document.getElementById(screenName1);
  el.style.backgroundColor = "rgb(155, 55, 55)"
  var el = document.getElementById(screenName2);
  el.style.backgroundColor = "rgb(55, 155, 55)"
  var el = document.getElementById(screenName3);
  el.style.backgroundColor = "rgb(55, 55, 155)"
  var el = document.getElementById(screenName4);
  el.style.backgroundColor = "rgb(155, 155, 155)"
  var el = document.getElementById(screenName5);
  el.style.backgroundColor = "rgb(27, 155, 112)"
}

function lightTheme (screenName1,screenName2,screenName3,screenName4,screenName5) {
  var el = document.getElementById(screenName1);
  el.style.backgroundColor = "rgb(225, 155, 155)"
  var el = document.getElementById(screenName2);
  el.style.backgroundColor = "rgb(155, 255, 155)"
  var el = document.getElementById(screenName3);
  el.style.backgroundColor = "rgb(155, 155, 255)"
  var el = document.getElementById(screenName4);
  el.style.backgroundColor = "rgb(255, 255, 255)"
  var el = document.getElementById(screenName5);
  el.style.backgroundColor = "aquamarine"
}