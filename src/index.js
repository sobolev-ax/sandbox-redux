import { createStore } from 'redux';

const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;

    default:
      return state;
  }

}

let store = createStore(reducer);

store.subscribe(() => {
  console.log('state: ', store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
