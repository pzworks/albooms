import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { AppNavigator } from './navigation/appNavigator'
import configureStore from './store/store'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#f0f0f0'} />
      <AppNavigator />
    </Provider>
  )
}
