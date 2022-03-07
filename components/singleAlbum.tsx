import {Pressable, Text, View} from "react-native";
import {albumStyles} from "../styles/albumStyles";
import {Entypo} from "@expo/vector-icons";
import {mainColor} from "../styles/common";
import {useDispatch} from "react-redux";
import {toggleFav} from "../store/album/action";
import {useEffect, useState} from "react";
import {Album} from "../model/entities";

const SingleAlbum = ({album, navigation}) => {
  const dispatch = useDispatch()
  const [albumEntity, setAlbumEntity]: [Album, any] = useState(new Album())
  const toggleFavorite = (albumId: string) => {
    dispatch(toggleFav(albumId))
  }

  console.log(albumEntity)

  useEffect(() => {
    setAlbumEntity(album)
  }, [albumEntity, album])

  return (
    <View style={albumEntity.favorite ? albumStyles.favAlbum : albumStyles.album}>
      <Pressable onPress={() => navigation.navigate('Album form', {album: albumEntity})}>
        <Entypo name={'edit'} size={24} color={mainColor} style={{textAlign: 'right'}}/>
      </Pressable>
      <Pressable onPress={() => toggleFavorite(albumEntity.id)}>
        <Entypo name={albumEntity.favorite ? 'star' : 'star-outlined'} size={24} color={mainColor} style={{textAlign: 'right'}}/>
      </Pressable>
      <Text style={albumStyles.albumTitle}>ID: {albumEntity.id} </Text>
      <Pressable onPress={() => navigation.navigate('Albums details', {album: albumEntity})}>
        <Text style={albumStyles.albumTitle}>Title: {albumEntity.title}</Text>
      </Pressable>
    </View>

  )
}

export default SingleAlbum
