import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/signup';
import SignInForm from './components/SignIn';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCvCKt9TuRcCOkzffEf2IXfIT4OVeWWN80",
      authDomain: "one-time-password-ea52b.firebaseapp.com",
      databaseURL: "https://one-time-password-ea52b.firebaseio.com",
      projectId: "one-time-password-ea52b",
      storageBucket: "one-time-password-ea52b.appspot.com",
      messagingSenderId: "261408903226"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
