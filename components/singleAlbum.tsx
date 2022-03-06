import {Pressable, Text, TouchableNativeFeedback, View} from "react-native";
import {albumStyles} from "../styles/albumStyles";

const SingleAlbum = props => {
  const { album, navigation } = props

  return (
    <TouchableNativeFeedback>
      <View style={albumStyles.album}>
        <Text style={albumStyles.albumTitle}>ID: {album.id} </Text>
        <Pressable onPress={() => navigation.navigate('Albums details', {album})}>
          <Text style={albumStyles.albumTitle}>Title: {album.title}</Text>
        </Pressable>
      </View>
    </TouchableNativeFeedback>

  )
}

export default SingleAlbum
