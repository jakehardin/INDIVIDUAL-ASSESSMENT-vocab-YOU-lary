import {
  getVocab, wordsAreHtml, wordsAreCss, wordsAreJavascript
} from '../api/vocabData';
import { signOut } from '../utils/auth';
import { showVocab } from '../pages/vocabulary';

// navigation events
const navigationEvents = (user) => {
  console.warn();
  // LOGOUT BUTTON
  document.querySelector('#login-form-container')
    .addEventListener('click', signOut);

  // ALL VOCAB WORDS
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
    console.warn('Hello');
  });

  // FILTER HTML
  document.querySelector('#html').addEventListener('click', () => {
    wordsAreHtml(user.uid).then(showVocab);
  });

  // FILTER CSS
  document.querySelector('#css').addEventListener('click', () => {
    wordsAreCss(user.uid).then(showVocab);
  });

  // FILTER JAVASCRIPT
  document.querySelector('#javascript').addEventListener('click', () => {
    wordsAreJavascript(user.uid).then(showVocab);
  });
};

export default navigationEvents;
