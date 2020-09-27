import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Index from '../Index'
import My from '../My'
import home from '../../../assets/home.png'
import activeHome from '../../../assets/home1.png'
import myicon from '../../../assets/my.png'
import activeMyicon from '../../../assets/my1.png'
export default function RootNav() {
  return (
    <Tab.Navigator  tabBarOptions={{
      activeTintColor: 'tomato',
      // inactiveTintColor: 'gray',
      // tabStyle : {
      //   backgroundColor: '#ddd',
      //   paddingBottom: 15,
      //   borderRightWidth: 1,
      //   borderRightColor: '#fff'
      // },
    }}
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconImage = home
        if(route.name=='Index'){
          iconImage = focused?activeHome:home
        }else if(route.name=='My'){
          iconImage =focused?activeMyicon:myicon
        }
        return (
          <Image style={{width:30,height:30,resizeMode: 'contain'}} source={iconImage} />
        )
      }
    })}>
      <Tab.Screen name="Index" component={Index} options={{title:'首页'}} />
      <Tab.Screen name="My" component={My} options={{title:'我的'}} />
    </Tab.Navigator>
  );
}
