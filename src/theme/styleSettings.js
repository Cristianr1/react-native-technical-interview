import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtn: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 40,
  },
  textLogoutBtn: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
