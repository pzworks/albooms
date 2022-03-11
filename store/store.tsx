import { applyMiddleware, combineReducers, createStore } from 'redux'

import albumReducer from './album/reducer'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

const reducers = combineReducers({
  album: albumReducer
})

const enhance = composeWithDevTools({
  realtime: true,
  hostname: 'localhost',
  port: 8000
})

const configureStore = () => {
  return createStore(reducers, enhance(applyMiddleware(ReduxThunk)))
}

export default configureStore
