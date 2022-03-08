import React from "react";
import {SafeAreaView} from "react-native";
import SingleAlbum from "../components/singleAlbum";

const AlbumDetails = ({route, navigation}) => {
  const { album } = route.params

  return (
    <SafeAreaView style={{justifyContent: 'center', flex: 1}}>
      <SingleAlbum album={album} navigation={navigation}/>
    </SafeAreaView>
  )
}

export default AlbumDetails
