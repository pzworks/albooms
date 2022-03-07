import {Pressable, Text, View} from "react-native";
import {albumStyles} from "../styles/albumStyles";
import {Entypo} from "@expo/vector-icons";
import {mainColor} from "../styles/common";

const SingleAlbum = props => {
  const { album, navigation } = props

  return (
    <View style={albumStyles.album}>
      <Pressable onPress={() => navigation.navigate('Album form', {album})}>
        <Entypo name={'edit'} size={24} color={mainColor} style={{textAlign: 'right'}}/>
      </Pressable>
      <Text style={albumStyles.albumTitle}>ID: {album.id} </Text>
      <Pressable onPress={() => navigation.navigate('Albums details', {album})}>
        <Text style={albumStyles.albumTitle}>Title: {album.title}</Text>
      </Pressable>
    </View>

  )
}

export default SingleAlbum
