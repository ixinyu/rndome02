import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// import Tabnav from './src/pages/navs/RootNav'
import Login from './src/pages/Login'
import StackNav from './src/pages/navs/stackNav'
function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>

  );
}
export default App;