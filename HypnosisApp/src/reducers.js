import { combineReducers } from 'redux'

import {
  SUBMIT_SURVEY, SUBMIT_FEEDBACK
} from './actions';

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
      return [
        ...state,
        {
          timestamp: action.timestamp,
          contact: action.contact,
          content: action.content
        }
      ]
    default:
      return state
  }
}

export default reducers = combineReducers({
  surveys,
  feedbacks
})
