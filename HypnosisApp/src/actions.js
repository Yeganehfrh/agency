/*
 * action types
 */

export const SUBMIT_SURVEY = 'SUBMIT_SURVEY'
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS'
export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK'
export const INIT_APP = 'INIT_APP'
export const PLAY_SESSION = 'PLAY_SESSION'
export const PAUSE_SESSION = 'PAUSE_SESSION'
export const FINISH_SESSION = 'FINISH_SESSION'
export const TERMINATE_SESSION = 'TERMINATE_SESSION'

/*
 * action creators
 */

export function submitSurvey(id, value) {
  var payload = {
    id: id,
    value: value
  }
  return {
    type: SUBMIT_SURVEY,
    payload: payload,
    meta: {
      offline: {
        // the network action to execute:
        effect: { url: 'http://192.168.1.2:3000/surveys', method: 'POST', body: payload },
        // action to dispatch when effect succeeds:
        commit: { type: 'SUBMIT_SURVEY_COMMIT', meta: payload },
        // action to dispatch if network action fails permanently:
        rollback: { type: 'SUBMIT_SURVEY_ROLLBACK', meta: payload }
      }
    }
  }
}

export function updateProgress(value) {
  return { type: UPDATE_PROGRESS, value: value }
}

export function submitFeedback(feedback) {
  return { type: SUBMIT_FEEDBACK, feedback: feedback }
}

export function initApp(info) {
  return { type: INIT_APP, info: info }
}

export function playSession(session) {
  return { type: PLAY_SESSION, session: session }
}

export function pauseSession(session) {
  return { type: PAUSE_SESSION, session: session }
}

export function terminateSession(session) {
  return { type: TERMINATE_SESSION, session: session }
}

export function finishSession(session) {
  return { type: FINISH_SESSION, session: session }
}