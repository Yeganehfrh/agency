import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  modal: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFC'
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  rtl: {
    fontFamily: 'Samim'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  floatingCloseButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fcfcfc',
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});