import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { addNavigationHelpers } from 'react-navigation';
import ReduxThunk from 'redux-thunk';
import Navigation from './src/Navigation';


//no need to write Reducers/index (finds index by default)
import reducers from './src/Reducers';


export default class App extends React.Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBAmS2efOfNakPGISb5PJ-nfE1nl4pVXRQ',
            authDomain: 'simpleapp-c14a5.firebaseapp.com',
            databaseURL: 'https://simpleapp-c14a5.firebaseio.com',
            projectId: 'simpleapp-c14a5',
            storageBucket: 'simpleapp-c14a5.appspot.com',
            messagingSenderId: '610527197503'
        };
        firebase.initializeApp(config);
    }


  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <Provider store={store}>
                <AppNavigation />
        </Provider>
    );
  }
}

const AppNav = ({ dispatch, nav }) => (
    <Navigation 
        navigation={addNavigationHelpers({ 
        dispatch,
        state: nav,
        })} 
    />
);

const mapStateToProps = state => ({
    nav: state.nav, // needed for addNavigationHelpers
  });

const AppNavigation = connect(mapStateToProps)(AppNav);
  
