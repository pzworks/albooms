import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AlbumList from "../screens/AlbumList";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      backBehavior={'history'}
    >
      <Drawer.Screen
        name='Strona główna'
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
