import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectAuthor from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}, user) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter New Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>

      <div class="form-group">
        <label for="price">Language</label>
        <input type="text" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
      </div>

      <button type="submit" class="btn btn-primary" id="submit-book">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectAuthor(`${obj.author_id || ''}`, user);
};

export default addVocabForm;
