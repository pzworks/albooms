import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AlbumList from "../screens/AlbumList";
import {Platform} from "react-native";

const Drawer = createDrawerNavigator()
export const mainColor = '#ee8a3f';
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? mainColor : ''
        },
        headerTitleStyle: {
          color: Platform.OS === 'android' ? '#000' : mainColor
        },
        headerTintColor:
          Platform.OS === 'android' ? '#000' : mainColor
      }}
      backBehavior={'history'}
    >
      <Drawer.Screen
        name='Lista albumów'
        component={AlbumList}
      />
    </Drawer.Navigator>
  )
}


export const AppNavigator = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
