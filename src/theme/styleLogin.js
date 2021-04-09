import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formContainer: {
    marginTop: 25,
    padding: 30,
  },
  titleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  inputForm: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
  },
  errorMessage: {
    alignSelf: 'flex-end',
    marginRight: 20,
    color: 'red',
  },
  loginBtn: {
    backgroundColor: 'white',
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 30,
    marginTop: 25,
  },
});
