import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { f, auth, database } from './config/config.js';

export default class App extends React.Component {

  registerUser = (email, password) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Instagram</Text>
      </View>
    );
  }
}
//code from template.
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
