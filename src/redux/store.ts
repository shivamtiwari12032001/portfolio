import { legacy_createStore, combineReducers } from 'redux'
import { imageReducer } from './reducer'

const rootReducer = combineReducers({
  displayModel: imageReducer,
})

export const store = legacy_createStore(rootReducer)

export type State = ReturnType<typeof rootReducer>
