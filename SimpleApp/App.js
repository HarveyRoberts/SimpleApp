import React from 'react';
import { StyleSheet, View } from 'react-native'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import { Container } from 'native-base';
import HRHeader from './src/Components/HR-Header.js';
import HRFooter from './src/Components/HR-Footer.js';
import HRContent from './src/Components/HR-Content.js';


//no need to write Reducers/index (finds index by default)
import reducers from './src/Reducers';


export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <Container>
                <HRHeader/>
                <HRContent/>
                <HRFooter/>
            </Container>
        </Provider>
    );
  }
}
