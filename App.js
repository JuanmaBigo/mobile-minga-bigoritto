import Index from './components/Index.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store'
import { Provider } from 'react-redux';
import TextStyled from './components/TextStyled.jsx';



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

