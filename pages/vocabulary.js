import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Books</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
      <p class="card-text">${item.definition}</p>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn">edit</i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas">delete</i>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
