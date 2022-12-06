import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocabulary';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all books on the DOM on App load
  getVocab(user.uid).then((vocabulary) => showVocab(vocabulary));
};

export default startApp;
