import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabulary';
import timestamp from '../utils/timestamp';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time_submitted: timestamp,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');

      console.warn('CLICKED UPDATE BOOK', e.target.id);
      console.warn(firebaseKey);

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
