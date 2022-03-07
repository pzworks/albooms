import React from "react";
import {SafeAreaView, ScrollView, Text} from "react-native";

const AlbumDetails = ({route}) => {
  const { album } = route.params

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Title: {album.id}</Text>
        <Text>Title: {album.title}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AlbumDetails
