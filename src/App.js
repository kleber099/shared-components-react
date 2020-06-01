import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Login } from './components/Login';

class App extends Component {
  onPressAuthenticate = (username, password) => {
    console.log('LFS onPressAuthenticate APP', username, password);
  };

  render() {
    return (
      <View>
        <Text>Componentes Comp</Text>
        <Login
          disabled={false}
          onPressAuthenticate={this.onPressAuthenticate}
        />
      </View>
    );
  }
}

export default App;
