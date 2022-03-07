import {Pressable, Text, View} from "react-native";
import {albumStyles} from "../styles/albumStyles";

const SingleAlbum = props => {
  const { album, navigation } = props

  return (
    <View style={albumStyles.album}>
      <Text style={albumStyles.albumTitle}>ID: {album.id} </Text>
      <Pressable onPress={() => navigation.navigate('Albums details', {album: album})}>
        <Text style={albumStyles.albumTitle}>Title: {album.title}</Text>
      </Pressable>
    </View>

  )
}

export default SingleAlbum
