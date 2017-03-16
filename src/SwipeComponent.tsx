import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pathOr } from 'ramda';
import styles from './AppStyles';

import SwipeCards from 'react-native-swipe-cards';

export
const Card = (props: any) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image 
        source={{uri: props.preview}} 
        style={{
          width: 300,
          height: 500,
          backgroundColor: 'red'
        }}
      />
    </View>);
}

export
const Swipe = (props: any) => {
  console.log(props);
    return (
      <View style={styles.container}>
        <SwipeCards
          renderCard={(cardData: any) => <Card {...cardData} />}
          cards={props.cards}
          onClickHandler={() => ({})}
          nopeText="Naaah!"
          yupText="Like!"
          smoothTransition={true}
          handleYup={props.onYes}
          handleNope={props.onNope}
        />
      </View>
    );
};