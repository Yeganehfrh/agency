import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  modal: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc'
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
    paddingTop: 30,
    textAlign: 'left',
    color: 'rgb(51,51,51)'
  },
  help: {
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    paddingLeft: 20
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
  sessionInstructions: {
    padding: 20,
    paddingTop: 60,
    fontSize: 16,
    textAlign: 'left'
  },
  sessionsScrollView: {
    paddingBottom: 80
  },
  sessionsPlayButton: {
    height: 50,
    width: 90
  },
  sessionsPlayButtonText: {
    fontSize: 18,
    fontFamily: 'samim'
  },
  sessionsCardContent: {
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: 16
  },
  sessionsCardTitle: {
    fontSize: 24,
    padding: 0,
    backgroundColor: 'transparent'
  },
  sessionsTopInstructions: {
    marginTop: 20,
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 14
  },
});
