import React, {useEffect} from "react"
import {Pressable, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";
import {fetchAlbums} from "../store/album/action";
import {albumStyles} from "../styles/albumStyles";
import AlbumList from "../components/AlbumList";

const Albums = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums)
  }, [dispatch])

  const albums: Album[] = useSelector((state: StoreState) => state.album.albums).slice(0, 10)

  return (
    <View style={{paddingBottom: 80}}>
      <Pressable style={albumStyles.addAlbumButton} onPress={() => props.navigation.navigate('Album form')}>
        <Text style={albumStyles.addAlbumButtonText}>Add album</Text>
      </Pressable>
      <AlbumList albums={albums} navigation={props.navigation} />
    </View>

  )

}

export default Albums
