// MARK: Import

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  StatusBar
} from 'react-native'
import ShareExtension from 'react-native-share-extension'

var styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
})

class ShareHeader extends Component {

	// MARK: View Initializers

  render() {
 
    return (
      <View style={[{height: 75, flexDirection:'row', backgroundColor:'#EBEBEB', flexWrap: 'wrap'}, styles.boxShadow]}/>
    )
  }

  // MARK: Actions

  // Close the share extension
  close = () => { ShareExtension.close() }
}

export default ShareHeader
