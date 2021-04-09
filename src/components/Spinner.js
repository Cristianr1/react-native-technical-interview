import React from 'react';
import SpinnerOverlay from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { spinnerColor } from '../theme/colors';

const Spinner = ({ isVisible }) => (
  <SpinnerOverlay
    visible={isVisible}
    textContent="Cargando..."
    textStyle={{ color: spinnerColor }}
    color={spinnerColor}
  />
);

Spinner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Spinner;
