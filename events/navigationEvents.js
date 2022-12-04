import {
  getVocab, wordsAreHtml, wordsAreCss, wordsAreJavascript
} from '../api/vocabData';
import { signOut } from '../utils/auth';
import { showVocab } from '../pages/vocabulary';

// navigation events
const navigationEvents = () => {
  console.warn();
  // LOGOUT BUTTON
  document.querySelector('#login-form-container')
    .addEventListener('click', signOut);

  // ALL VOCAB WORDS
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  // FILTER HTML
  document.querySelector('#html').addEventListener('click', () => {
    wordsAreHtml().then(showVocab);
  });

  // FILTER CSS
  document.querySelector('#css').addEventListener('click', () => {
    wordsAreCss().then(showVocab);
  });

  // FILTER JAVASCRIPT
  document.querySelector('#javascript').addEventListener('click', () => {
    wordsAreJavascript().then(showVocab);
  });
};

export default navigationEvents;
