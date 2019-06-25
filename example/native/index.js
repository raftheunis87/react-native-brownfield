import React from 'react';
import {AppRegistry, StyleSheet, Text, View, NativeModules, Button} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi React Native</Text>
        <Button
          onPress={() => { NativeModules.ReactNativeBrownfield.setPopGestureRecognizer(false) }}
          title="Disable back gesture"
        />

        <Button
          onPress={() => { NativeModules.ReactNativeBrownfield.popToNative(true) }}
          title="Pop to native"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// Module name
AppRegistry.registerComponent('ReactNative', () => App);