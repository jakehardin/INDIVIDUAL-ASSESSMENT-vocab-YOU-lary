import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocabulary';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all books on the DOM on App load
  getVocab().then((vocabulary) => showVocab(vocabulary));
};

export default startApp;
