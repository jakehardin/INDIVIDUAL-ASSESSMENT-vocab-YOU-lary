import { getVocab, wordsAreHtml } from '../api/vocabData';
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

  // TODO: BOOKS ON SALE
  document.querySelector('#html').addEventListener('click', () => {
    wordsAreHtml().then(showVocab);
  });
};

export default navigationEvents;
