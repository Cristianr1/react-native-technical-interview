/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import {
  View, ImageBackground, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import AgeDropdown from '../components/login/AgeDropdown';
import CheckTandC from '../components/login/CheckTandC';
import { login } from '../store/actions/authAction';
import loginApi from '../api';
import styles from '../theme/styleLogin';
import Spinner from '../components/Spinner';
import ErrModal from '../components/ErrModal';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();

  const [age, setAge] = useState('');
  const [
    areTermsAndConditionsAccepted,
    setAreTermsAndConditionsAccepted,
  ] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await loginApi(data.name, data.lastName, data.email, age, areTermsAndConditionsAccepted);
      setIsLoading(false);
      dispatch(login());
    } catch (err) {
      setErrorMessage(err.message);
      setShowModal(true);
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground source={require('../assets/General/bc_inicio.png')} style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <Spinner isVisible={isLoading} />
        <ErrModal message={errorMessage} isVisible={showModal} hide={() => setShowModal(false)} />
        <View style={styles.formContainer}>
          <Controller
            name="name"
            control={control}
            render={({ onChange, onBlur, value }) => (
              <View>
                <Text style={styles.titleForm}>Nombre</Text>
                <TextInput
                  style={styles.inputForm}
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  ref={nameInputRef}
                  maxLength={25}
                  autoCapitalize="words"
                />
              </View>
            )}
            rules={{
              required: { value: true, message: 'Campo requerido' },
              validate: (value) => !value.match(/[^a-zA-Z\s]+$/) || 'Por favor ingrese sólo letras',
            }}
            onFocus={() => nameInputRef.current.focus()}
            defaultValue=""
          />
          {errors.name && (
            <Text style={styles.errorMessage}>
              {errors.name.message}
            </Text>
          )}

          <Controller
            name="lastName"
            control={control}
            render={({ onChange, onBlur, value }) => (
              <View>
                <Text style={{ ...styles.titleForm, marginTop: 15 }}>
                  Apellido
                </Text>
                <TextInput
                  style={styles.inputForm}
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  ref={lastNameInputRef}
                  maxLength={25}
                  autoCapitalize="words"
                />
              </View>
            )}
            rules={{
              required: { value: true, message: 'Campo requerido' },
              validate: (value) => !value.match(/[^a-zA-Z\s]+$/) || 'Por favor ingrese sólo letras',
            }}
            onFocus={() => lastNameInputRef.current.focus()}
            defaultValue=""
          />
          {errors.lastName && (
            <Text style={styles.errorMessage}>
              {errors.lastName.message}
            </Text>
          )}

          <Controller
            name="email"
            control={control}
            render={({ onChange, onBlur, value }) => (
              <View>
                <Text style={{ ...styles.titleForm, marginTop: 15 }}>
                  Email
                </Text>
                <TextInput
                  style={styles.inputForm}
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  ref={emailInputRef}
                  maxLength={25}
                  autoCapitalize="none"
                />
              </View>
            )}
            rules={{
              required: { value: true, message: 'Campo requerido' },
              validate: (value) => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                  || 'El email no es valido',
            }}
            onFocus={() => emailInputRef.current.focus()}
            defaultValue=""
          />
          {errors.email && (
            <Text style={styles.errorMessage}>
              {errors.email.message}
            </Text>
          )}

          <AgeDropdown age={age} setAge={(value) => setAge(value)} />

          <CheckTandC
            accepted={areTermsAndConditionsAccepted}
            setAccepted={setAreTermsAndConditionsAccepted}
          />

          <View style={{ backgroundColor: 'transparent' }}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
