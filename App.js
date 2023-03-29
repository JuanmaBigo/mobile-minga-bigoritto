import Hero from './components/Hero.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store'
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Hero/>
      </NavigationContainer>
    </Provider>
  );
}
