import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';

//no need to write Reducers/index (finds index by default)
import reducers from './src/Reducers';


export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Text>
                    Hi
                </Text>
            </View>
        </Provider>
    );
  }
}
