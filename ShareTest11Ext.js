// MARK: Import

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
} from 'react-native'
import ShareExtension from 'react-native-share-extension'
import NativeTachyons from 'react-native-style-tachyons'
import ShareHeader from './ShareHeader'

const styles = StyleSheet.create({
  okayButton: {
    height: 50,
    position: 'absolute', 
    left: 0, right: 0, bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor:'#2987f3'
  },
  content:{
    fontSize: 28, 
    fontWeight: 'bold', 
    width: 289, 
    alignSelf:'center', 
    marginTop: 32, 
    textAlign:'center'
  },
  image:{
    width: 289, 
    height: 304, 
    alignSelf:'center', 
    borderRadius:8, 
    marginTop:32, 
    resizeMode: 'cover'
  },
  container:{
    flex:1, 
    backgroundColor:'white'
  }
})

class Ext extends Component {

	// MARK: View Initializers
  constructor(props){
    super(props)
  }

  async componentDidMount() {
    // Did Mount, initial state has been applied
    try {
      const { type, value } = await ShareExtension.data()
    } catch(e) {
      console.log('error', e)
    }
  }

  // Load the validator that pulls the shared image and validates it
  render() {
    const image = require('./resources/character.png')
    return (
    	<View style={styles.container}>
        <ShareHeader />

    		<View>
          <Text style={styles.content}>Content</Text>
        </View>

    		<TouchableHighlight style={styles.okayButton} underlayColor='transparent' onPress={() => this.close()}>
          <Text style={{color:'#2987f3'}}>Done</Text>
        </TouchableHighlight>
    	</View>
    )
  }

  // Close the share app
  close = () => { ShareExtension.close() }
}

export default Ext

