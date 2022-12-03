import { deleteVocab, getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabulary';
import addVocabForm from '../components/forms/addVocabForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
    if (e.target.id.includes('add-book-btn')) {
      addVocabForm();
    }
  });
};

export default domEvents;
