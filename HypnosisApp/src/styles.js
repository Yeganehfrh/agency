import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  modal: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc'
  },
  playerContainer: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc'
  },

  restartButton: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderWidth: 0,
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },

  questionScreenDivider: {
    backgroundColor: 'grey',
    height: 1,
    margin: 20
  },
  playerButtonContainer: {
    width: 60,
    height: 60,
    margin: 10
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
    paddingBottom: 20
  },
  aboutButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontFamily: 'samim',
    fontSize: 18,
    padding: 20,
    textAlign: 'left'
  },
  container: {
    flex: 1,
    marginTop: 22,
  },
  sessionInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 100,
    height: 50,
    margin: 30
  },
  rtl: {
    fontFamily: 'samim'
  },
  title: {
    fontSize: 24,
    padding: 20,
    paddingTop: 0,
    textAlign: 'left',
    color: 'black'
  },
  help: {
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    paddingLeft: 20,
    color: 'black'
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
    padding: 20
  },
  sessionInstructions: {
    padding: 20,
    paddingTop: 60,
    fontSize: 16,
    textAlign: 'left'
  },
  sessionsScrollView: {
    paddingBottom: 80
  },

  negative: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c',
    marginLeft: 10,
    marginRight: 10
  },

  neutral: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderWidth: 0,
    backgroundColor: '#95a5a6',
    borderColor: '#7f8c8d'
  },

  pause: {
    height: 80,
    width: 80,
    borderWidth: 0,
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c',
    marginLeft: 10,
    marginRight: 10
  },

  play: {
    marginLeft: 10,
    marginRight: 10,
    height: 80,
    width: 80,
    borderWidth: 0,
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },

  positive: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderWidth: 0,
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'samim'
  },
  
  sessionsCardContent: {
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: 16,
    color: 'black'
  },
  sessionsCardTitle: {
    fontSize: 24,
    padding: 0,
    backgroundColor: 'transparent',
    color: 'grey'
  },
  sessionsTopInstructions: {
    marginTop: 0,
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 14,
    color: 'black'
  },
});
