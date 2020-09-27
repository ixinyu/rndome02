import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import TabNav from './RootNav'
import Login from '../Login'
import Webview from '../Webview'
function App() {
  return (
    // initialRouteName="Login"
      <Stack.Navigator initialRouteName="Login" screenOptions={({route})=>{
        let headerTitle = '首页'
        if(route.state){ //在tab导航中（state tab 导航特有）
          if(route.state.index === 1){
            headerTitle = '我的'
          }
        }
        return {
          gestureEnabled: false, //是否支持手势滑动关闭页面
          headerTitle:headerTitle
        }
      }}>
          <Stack.Screen name="TabNav" component={TabNav} options={{title:'首页'}} />
          <Stack.Screen name="Login" component={Login} options={{title:'登录'}} />
          <Stack.Screen name="Webview" component={Webview} options={{title:'配对',headerShown:false}} />
      </Stack.Navigator>
  );
}
export default App;