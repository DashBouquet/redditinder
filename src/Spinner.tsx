import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

var SpinnerComponent = require('react-native-spinkit');

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#211134',
  },

  spinner: {
    marginBottom: 50
  },

  header: {
    color: "#ffffff",
    fontSize: 42
  },

  subheader: {
    color: "#ffffff",
    fontSize: 32
  }
});

export
const Spinner = (props: any) => (
  <View style={styles.container}>
      <Text style={styles.header}>Dash Bouquet</Text>
      <Text style={styles.subheader}>Loading...</Text>

      <SpinnerComponent type="CircleFlip" color="#ed145b" size={100} isVisible={true}/>
  </View>
)
