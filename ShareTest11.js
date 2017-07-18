/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import NativeTachyons from 'react-native-style-tachyons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginHorizontal: 16
  },
});

class ShareTest11 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Test App
        </Text>
        <Text style={styles.instructions}>
          Run this app on a 11b3 device, take a screenshot and try to share the screenshot in the edit pane to this application.
        </Text>
      </View>
    );
  }
}

export default NativeTachyons.wrap(ShareTest11)
