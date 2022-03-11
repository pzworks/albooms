import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Albums from '../screens/Albums'
import { Platform } from 'react-native'
import { mainColor } from '../styles/common'
import AlbumDetails from '../screens/AlbumDetails'
import AlbumForm from '../screens/AlbumForm'

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
        name="Albums list"
        component={Albums}
      />
      <Drawer.Screen
        name="Albums details"
        component={AlbumDetails}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="Album form"
        component={AlbumForm}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
  )
}


export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
