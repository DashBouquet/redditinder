import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SwipeContainer from './SwipeContainer';
import ResultsContainer from './ResultsContainer';

const ScrollableTabView = require('react-native-scrollable-tab-view');

export
const App = (props: any) => (
      <ScrollableTabView locked={true}>
        <SwipeContainer tabLabel="Swipe" onYes={props.handleYes} onNope={props.handleNope}/>
        <ResultsContainer tabLabel="Control" result={props.result} />
      </ScrollableTabView>
);
