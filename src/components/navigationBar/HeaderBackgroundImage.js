/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from 'react';
import { Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeaderBackgroundImage = () => (
  <Image
    source={require('../../assets/General/bc_nav_bar.png')}
    style={{ width }}
  />
);

export default HeaderBackgroundImage;
