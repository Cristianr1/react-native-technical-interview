/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';

const ICSearch = () => (
  <Image
    source={require('../../assets/NavigationBar/ic_search.png')}
    style={{ marginRight: 20, marginTop: 10 }}
  />
);

export default ICSearch;
