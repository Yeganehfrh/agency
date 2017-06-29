import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  modal: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFC'
  },
  playerButtonContainer: {
    width: 60,
    height: 60,
    margin: 10
  },
  questionsButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontFamily: 'Samim',
    fontSize: 18,
    padding: 20,
    textAlign: 'left'
  },

  container: {
    flex: 1
  },
  button: {
    width: 100,
    height: 50,
    margin: 30
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
    paddingTop: 20
  },
});