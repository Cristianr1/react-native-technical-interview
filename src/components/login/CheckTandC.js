/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';

const CheckTandC = ({ accepted, setAccepted }) => (

  <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
    <CheckBox
      disabled={false}
      value={accepted}
      onValueChange={(newValue) => setAccepted(newValue)}
      tintColors={{ true: 'blue', false: 'blue' }}
    />
    <Text>
      <Text style={{ color: 'white', fontSize: 14 }}>Acepto términos y condiciones</Text>
    </Text>
  </View>
);

CheckTandC.propTypes = {
  accepted: PropTypes.bool.isRequired,
  setAccepted: PropTypes.func.isRequired,
};

export default CheckTandC;
