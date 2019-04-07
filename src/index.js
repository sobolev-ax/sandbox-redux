import { createStore } from 'redux';

const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    case 'RND':
      return state + action.payload;

    default:
      return state;
  }

}

/**
 * Action creators
 */
const dec = () => ({ type: 'DEC' });
const inc = () => ({ type: 'INC' });
const rnd = (payload) => ({ type: 'RND', payload });

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
