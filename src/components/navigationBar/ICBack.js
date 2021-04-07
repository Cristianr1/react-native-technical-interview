/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const ICBack = ({ goLibrary }) => (
  <TouchableOpacity onPress={goLibrary}>
    <Image
      source={require('../../assets/NavigationBar/ic_back.png')}
      style={{ marginLeft: 20 }}
    />
  </TouchableOpacity>
);

ICBack.propTypes = {
  goLibrary: PropTypes.func.isRequired,
};

export default ICBack;
