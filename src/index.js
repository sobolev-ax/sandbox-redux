import { createStore } from 'redux';

const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

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
