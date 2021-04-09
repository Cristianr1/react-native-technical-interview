import React from 'react';
import {
  Modal,
  Text,
  View,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../theme/styleModal';
import { primary } from '../theme/colors';

const ErrModal = ({ message, isVisible, hide }) => (
  <Modal animationType="slide" transparent visible={isVisible}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={{ marginBottom: 20 }}>{message}</Text>
        <Button
          onPress={hide}
          title="Ok"
          color={primary}
        />
      </View>
    </View>
  </Modal>
);

ErrModal.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default ErrModal;
