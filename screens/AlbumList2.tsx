import React from "react"
import {SafeAreaView, View, Text, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";
import {fetchAlbums} from "../store/album/action";

const AlbumList2 = props => {
  const dispatch = useDispatch();
  dispatch(fetchAlbums())
  let albums: Album[] = [];

  albums = useSelector((state: StoreState) => state.album.albums)
  console.log('dupa', albums)

  const albumsJsx = albums
    ? albums.map(album => (
        <View>
          <Text>{album.name}</Text>
        </View>
      ))
    : null

  return (
    <SafeAreaView>
      <ScrollView>
        {albumsJsx}
      </ScrollView>
    </SafeAreaView>
  )
}

export default AlbumList2
