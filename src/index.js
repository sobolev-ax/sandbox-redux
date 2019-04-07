import { createStore } from 'redux';
import reducer from './reducer';
import {
  inc,
  dec,
  rnd,
} from './actions';

let store = createStore(reducer);

const update = () => {
  console.log('state: ', store.getState());

  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(update);

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch(dec());
  });

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch(inc());
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);

    store.dispatch(rnd(payload));
  });
