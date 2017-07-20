/*
 * action types
 */

export const SUBMIT_SURVEY = 'SUBMIT_SURVEY'
export const SUBMIT_TIMESTAMP = 'SUBMIT_TIMESTAMP'
export const SUBMIT_PROFILE = 'SUBMIT_PROFILE'
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS'
export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK'
export const INIT_APP = 'INIT_APP'
export const PLAY_SESSION = 'PLAY_SESSION'
export const PAUSE_SESSION = 'PAUSE_SESSION'
export const FINISH_SESSION = 'FINISH_SESSION'
export const TERMINATE_SESSION = 'TERMINATE_SESSION'

export const RESET_STORE = 'RESET_STORE'
/*
 * action creators
 */

export function submitSurvey(payload) {
  return {
    type: SUBMIT_SURVEY,
    payload: payload
  }
}

export function submitFeedback(payload) {
  return {
    type: SUBMIT_FEEDBACK,
    payload: payload
  }
}

export function submitProfile(payload) {
  return {
    type: SUBMIT_PROFILE,
    payload: payload
  }
}

export function submitTimestamp(payload) {
  return {
    type: SUBMIT_TIMESTAMP,
    payload: payload
  }
}

export function clearStore() {
  return {
    type: RESET_STORE,
    payload: {}
  }
}

export function updateProgress(value) {
  return { type: UPDATE_PROGRESS, value: value }
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