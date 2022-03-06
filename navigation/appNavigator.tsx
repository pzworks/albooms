import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AlbumList from "../screens/AlbumList";
import {Platform} from "react-native";
import {mainColor} from "../styles/common";
import AlbumDetails from "../screens/AlbumDetails";

const Drawer = createDrawerNavigator()
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
        name='Albums list'
        component={AlbumList}
      />
      <Drawer.Screen
        name='Albums details'
        component={AlbumDetails}
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
