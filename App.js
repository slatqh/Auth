import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import reducers from './src/reducers/';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyA3Tm2pP6q67Ufew5EvjH_yIXX2uIpTqoQ',
    authDomain: 'manager-ca45c.firebaseapp.com',
    databaseURL: 'https://manager-ca45c.firebaseio.com',
    projectId: 'manager-ca45c',
    storageBucket: 'manager-ca45c.appspot.com',
    messagingSenderId: '1072341397153'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
       <View>
        <LoginForm />
       </View>
      </Provider>
    );
  }
}

export default App;
