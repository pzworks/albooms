import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import albumReducer from "./album/reducer";

const rootReducer = combineReducers({
  album: albumReducer,
})

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools())
}

export default configureStore()
