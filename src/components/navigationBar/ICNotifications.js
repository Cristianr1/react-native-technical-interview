/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from 'react';
import { Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ICNotifications = () => (
  <Image
    source={require('../../assets/NavigationBar/ic_notifications.png')}
    style={{ marginLeft: 15 }}
  />
);

export default ICNotifications;
