import {Album} from "../model/entities";
import {Text, View} from "react-native";

const SingleAlbum = props => {
  const album: Album = props.album

  return (
    <View>
      <Text>{album.id}</Text>
      <Text>{album.name}</Text>
    </View>
  )
}

export default SingleAlbum
