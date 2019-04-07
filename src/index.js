import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

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
} = bindActionCreators(actions, dispatch);

const update = () => {
  console.log('state: ', store.getState());

  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const random = Math.floor(Math.random() * 10);
        rnd(random);
      }}
    />,
    document.getElementById('root')
  );
};

store.subscribe(update);

update();
