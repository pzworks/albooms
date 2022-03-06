import React, {useEffect} from "react"
import {FlatList, Pressable, ScrollView, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";
import {fetchAlbums} from "../store/album/action";
import SingleAlbum from "../components/singleAlbum";
import {albumStyles} from "../styles/albumStyles";

const AlbumList = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums)
  }, [dispatch])

  const albums: Album[] = useSelector((state: StoreState) => state.album.albums).slice(0, 10)

  return (
    <ScrollView>
      <Pressable style={albumStyles.addAlbumButton} onPress={() => props.navigation.navigate('Album form')}>
        <Text style={albumStyles.addAlbumButtonText}>Add album</Text>
      </Pressable>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={itemData => <SingleAlbum key={itemData.item.id} album={itemData.item} />}
      />
    </ScrollView>

  )

}

export default AlbumList
