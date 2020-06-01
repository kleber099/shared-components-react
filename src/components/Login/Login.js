import React, { Component } from 'react';
import { Text, View, Image, Platform, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { TextField } from 'react-native-material-textfield';
import Touchable from 'react-native-platform-touchable';

import Images from '../../assets/Images';
import styles from './styles';
import { colors } from '../../constants';

class Login extends Component {
  inputs = {};

  state = {
    secureTextEntry: true,
    username: '',
    password: '',
  };

  onUsernameChange = (username) => this.setState({ username });

  onPasswordChange = (password) => this.setState({ password });

  onAccessoryPress = () =>
    this.setState((state) => ({ secureTextEntry: !state.secureTextEntry }));

  onPressAuthenticateDelay = () => {
    const { username, password } = this.state;
    const { onPressAuthenticate } = this.props;

    if (username === '') {
      Alert.alert('', 'O campo Login está vázio.');
      return;
    }

    if (password === '') {
      Alert.alert('', 'O campo Senha está vázio.');
      return;
    }

    onPressAuthenticate(username, password);
  };

  focusTheField = (id, event) => {
    if (event.localeCompare('focus') === 0) {
      this.inputs[id].focus();
    } else if (event.localeCompare('submit') === 0) {
      this.inputs[id].props.onPress();
    }
  };

  render() {
    const { username, password, secureTextEntry } = this.state;
    const { disabled } = this.props;

    const sourcePassword = secureTextEntry
      ? Images.iconEyeHidden
      : Images.iconEye;

    return (
      <View>
        <View style={styles.accountCard}>
          <TextField
            label="Login"
            keyboardType="email-address"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            renderAccessory={() => (
              <Image source={Images.iconAccount} style={styles.iconTextField} />
            )}
            outline={Platform.OS === 'ios'}
            value={username}
            tintColor={colors.primaryColor}
            onChangeText={this.onUsernameChange}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.focusTheField('pwdField', 'focus');
            }}
          />
          <TextField
            ref={(input) => {
              this.inputs.pwdField = input;
            }}
            inputContainerStyle={{ marginTop: 20 }}
            label="Senha"
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            renderAccessory={() => (
              <Touchable
                style={styles.iconTextField}
                foreground={Touchable.SelectableBackground()}
                onPress={this.onAccessoryPress}
              >
                <Image source={sourcePassword} style={styles.iconTextField} />
              </Touchable>
            )}
            outline={Platform.OS === 'ios'}
            value={password}
            tintColor={colors.primaryColor}
            onChangeText={this.onPasswordChange}
            onSubmitEditing={() => {
              this.focusTheField('signInButton', 'submit');
            }}
          />
        </View>
        <View style={styles.buttonSubmit}>
          <Touchable
            ref={(input) => {
              this.inputs.signInButton = input;
            }}
            onPress={this.onPressAuthenticateDelay}
            foreground={Touchable.SelectableBackground()}
          >
            <View
              style={disabled ? styles.loginButtonDisabled : styles.loginButton}
            >
              <Text style={styles.loginButtonText}>
                {disabled ? 'Autenticando...' : 'ENTRAR'}{' '}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onPressAuthenticate: PropTypes.func.isRequired,
};

export default Login;
