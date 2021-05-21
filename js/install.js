const prompt = document.querySelector('.prompt');
const installButton = prompt.querySelector('.prompt__install');
const closeButton = prompt.querySelector('.prompt__close');
let installEvent;

function getVisited() {
  return localStorage.getItem('install-prompt');
}

function setVisited() {
  localStorage.setItem('install-prompt', true);
}

// this event will only fire if the user does not have the pwa installed
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  // if no localStorage is set, first time visitor
  if (!getVisited()) {
    // show the prompt banner
    prompt.style.display = 'block';

    // store the event for later use
    installEvent = event;
  }
});

installButton.addEventListener('click', () => {
  // hide the prompt banner
  prompt.style.display = 'none';

  // trigger the prompt to show to the user
  installEvent.prompt();

  // check what choice the user made
  installEvent.userChoice.then((choice) => {
    // if the user declined, we don't want to show the button again
    // set localStorage to true
    if (choice.outcome !== 'accepted') {
      setVisited();
    }

    installEvent = null;
  });
});

closeButton.addEventListener('click', () => {
  // set localStorage to true
  setVisited();

  // hide the prompt banner
  prompt.style.display = 'none';  

  installEvent = null;
});