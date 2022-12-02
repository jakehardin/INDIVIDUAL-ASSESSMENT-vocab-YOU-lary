// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>OK. Do you see me?</h1>
    <small>Click this fun button !</small><br />
    <button class="btn btn-danger" id="click-me">CLICK ME PLS!</button><br />
    <hr />
    <h2>Use these for logo:</h2>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
