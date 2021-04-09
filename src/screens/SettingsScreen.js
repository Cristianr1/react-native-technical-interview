/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, Image, ImageBackground, TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authAction';
import styles from '../theme/styleSettings';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/General/bc_inicio.png')}
        style={styles.background}
      >
        <Image
          source={require('../assets/General/wbooks_logo.png')}
        />

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => dispatch(logout())}
        >
          <Text style={styles.textLogoutBtn}>Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SettingsScreen;
