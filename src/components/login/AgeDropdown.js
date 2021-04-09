import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';

const AgeDropdown = ({ age, setAge }) => {
  const [dropdown, setDropdown] = useState([]);

  useEffect(() => {
    const newArr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 6; i <= 100; i++) {
      newArr.push({ id: i, label: `${i} años`, value: `${i} años` });
    }
    setDropdown(newArr);
  }, []);

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 20 }}>
      <RNPickerSelect
        placeholder={{
          label: 'Seleccione su edad',
          value: '',
        }}
        onValueChange={(value) => setAge(value)}
        value={age}
        items={dropdown}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
        }}
      />
    </View>
  );
};

AgeDropdown.propTypes = {
  age: PropTypes.string.isRequired,
  setAge: PropTypes.func.isRequired,
};

export default AgeDropdown;
