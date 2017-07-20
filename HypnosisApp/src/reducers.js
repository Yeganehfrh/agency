import { combineReducers } from 'redux'

import {
  SUBMIT_SURVEY, SUBMIT_FEEDBACK, RESET_STORE, SUBMIT_TIMESTAMP, SUBMIT_PROFILE
} from './actions';

function timestamps(state = [], action) {
  switch (action.type) {
    case SUBMIT_TIMESTAMP:
      return [...state, action.payload];
    default:
      return state
  }
}

function surveys(state = [], action) {
  switch (action.type) {
    case SUBMIT_SURVEY:
      return [...state, action.payload];
    default:
      return state
  }
}

function feedbacks(state = [], action) {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      return [...state, action.payload];
    default:
      return state
  }
}

function profile(state = {}, action) {
  switch (action.type) {
    case SUBMIT_PROFILE:
      return action.payload;
    default:
      return state
  }
}


const appReducers = combineReducers({
  timestamps,
  surveys,
  profile,
  feedbacks
})

const initialState = appReducers({}, {},{},{})

export default rootReducer = (state = {}, action) => {
  if (action.type === RESET_STORE){
    state = initialState
    console.warn("State reset")
  }
  return appReducers(state, action)
}