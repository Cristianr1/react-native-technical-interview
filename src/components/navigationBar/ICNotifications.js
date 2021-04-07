/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';

const ICNotifications = () => (
  <Image
    source={require('../../assets/NavigationBar/ic_notifications.png')}
    style={{ marginLeft: 10 }}
  />
);

export default ICNotifications;
