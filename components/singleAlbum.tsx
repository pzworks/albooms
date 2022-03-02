import {Album} from "../model/entities";
import {Text, TouchableNativeFeedback, View} from "react-native";
import {albumStyles} from "../styles/albumStyles";

const SingleAlbum = props => {
  const album: Album = props.album

  return (
    <TouchableNativeFeedback>
      <View style={albumStyles.album}>
        <Text style={albumStyles.albumTitle}>ID: {album.id} </Text>
        <Text style={albumStyles.albumTitle}>Title: {album.title}</Text>
      </View>
    </TouchableNativeFeedback>

  )
}

export default SingleAlbum
