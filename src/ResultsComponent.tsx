import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SwipeContainer from './SwipeContainer';
import ResultsContainer from './ResultsContainer';

const ScrollableTabView = require('react-native-scrollable-tab-view');

export
const styles: any = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export
const Results = (props: any) => {
  console.log(props);
  if ( !props.result.length ) {
    return (<View><Text>No actions recorded</Text></View>);
  }

  return (
      <View>
        {props.result.map( (r: any, i: number) =>
          <Text key={i} style={styles.text}>{r.card.title} was {r.like ? "Liked" : "Disliked"}</Text>
        )}
      </View>
  );
}
