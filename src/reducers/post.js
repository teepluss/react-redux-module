import { combineReducers } from 'redux'
import * as types from '../constants'

const items = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_POST:
      return action.posts
    default:
      return state
  }
}

const current = (state = null, action) => {
  switch (action.type) {
    case types.VIEW_POST:
      return action.post
    default:
      return state
  }
}

export default combineReducers({
  items,
  current
})
