import {
  createStore,
  bindActionCreators,
} from 'redux';

import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator = (action, dispatch) => (...args) => {
//   return dispatch(action(...args));
// }

const {
  inc,
  dec,
  rnd,
} = bindActionCreators(actions, dispatch)

const update = () => {
  console.log('state: ', store.getState());

  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(update);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);

    rnd(payload);
  });
