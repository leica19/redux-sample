
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/* ********************************************************** */


/* Storeの実装 */

// 初期state変数（initialState）の作成
const initialState = {
  value: null,
};
// createStore（）メソッドを使ってStoreの作成
const store = createStore(formReducer, initialState);

/* ********************************************************** */

/* Actionの実装 */

// Action名の定義
const SEND = 'SEND';

// Action Creator
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}

/* ********************************************************** */


// Reducer
function formReducer(state, action) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/* ********************************************************** */


// View (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};
