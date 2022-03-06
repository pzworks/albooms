import React from "react";
import {SafeAreaView, ScrollView, Text} from "react-native";
import {useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";

const AlbumDetails = props => {
  const {albumId} = props
  const album: Album = useSelector((store: StoreState) =>
    store.album.albums.filter((album: Album) => album.id === albumId).shift()
  )

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Title: {album.title}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AlbumDetails
