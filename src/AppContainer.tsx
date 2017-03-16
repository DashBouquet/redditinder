import * as React from 'react';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'
import branch from 'recompose/branch'

import renderComponent from 'recompose/renderComponent';
import withHandlers from 'recompose/withHandlers';

import { append } from 'ramda';
  
import { App } from './AppComponent';

export default compose(
  withState('result', 'setResult', []),

  withHandlers({
    handleYes: (props: any) => (card: any) => {
      console.log("Handling yes", card);
      props.setResult(append({card, like: true}, props.result))
    },

    handleNope: (props: any) => (card: any) => {
      console.log("Handling no", card);
      props.setResult(append({card, like: false}, props.result))
    }
  })
)(App);



