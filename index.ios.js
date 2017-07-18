import Buffer from 'buffer'

global.Buffer = global.Buffer || Buffer.Buffer

import { AppRegistry } from 'react-native'
import ShareTest11 from './ShareTest11'
import ShareTest11Ext from './ShareTest11Ext'

// Load App, the entry point to the application.
AppRegistry.registerComponent('ShareTest11', () => ShareTest11)
// Load the share extension
AppRegistry.registerComponent('ShareTest11Ext', () => ShareTest11Ext)