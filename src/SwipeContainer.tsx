import * as React from 'react';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle'
import withState from 'recompose/withState'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent';
import withHandlers from 'recompose/withHandlers';

import { identity } from 'ramda';

import { Spinner } from './Spinner';
import { Swipe } from './SwipeComponent';
import { fetchItems } from './core/api';

export default compose(
  withState('cards', 'setCards', []),

  lifecycle({ componentDidMount: function(c: any) {
      fetchItems()
        .then(this.props.setCards);
      }
   }, () => {}),
   branch(
    (props: any) => !!props.cards.length,
    identity,
    renderComponent(Spinner)
   )

)(Swipe)


