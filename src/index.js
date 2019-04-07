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
    store.dispatch({ type: 'DEC' });
  });

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({ type: 'INC' });
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);

    store.dispatch({
      type: 'RND',
      payload,
    });
  });
