import React from "react";
import {SafeAreaView} from "react-native";
import SingleAlbum from "../components/singleAlbum";
import {useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";

const AlbumDetails = ({route, navigation}) => {
  const {albumId} = route.params
  const album: Album = useSelector((state: StoreState) => state.album.albums.find(album => album.id === albumId))

  return (
    <SafeAreaView style={{justifyContent: 'center', flex: 1}}>
      {album && <SingleAlbum album={album} navigation={navigation}/>}
    </SafeAreaView>
  )
}

export default AlbumDetails
