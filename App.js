import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store'
import { Provider } from 'react-redux';
import AppStack from './navigation/AppStack.jsx';
import AuthStack from './navigation/AuthStack.jsx';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
        {/* <AuthStack/> */}
      </NavigationContainer>
    </Provider>
  );
}

