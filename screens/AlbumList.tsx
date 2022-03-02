import React, {useEffect, useState} from "react"
import {SafeAreaView, View, Text, ScrollView, FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";
import {fetchAlbums} from "../store/album/action";
import SingleAlbum from "../components/singleAlbum";

const AlbumList = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums)
  }, [dispatch])

  const albums: Album[] = useSelector((state: StoreState) => state.album.albums)
  console.log(albums.length)

  return (
    <FlatList
      data={albums}
      keyExtractor={item => item.id}
      renderItem={itemData => <SingleAlbum album={itemData.item} />}
    />
  )

}

export default AlbumList
