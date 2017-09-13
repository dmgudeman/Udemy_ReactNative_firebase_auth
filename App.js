import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/signup';
import SignInForm from './components/SignIn';

export default class App extends React.Component {
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
    justifyContent: 'center',
  },
});
