import React from "react";
import {Pressable, Text, TextInput, View} from "react-native";
import {albumStyles} from "../styles/albumStyles";

const AlbumForm = props => {
  const submit = () => {}

  return (
    <View>
      <TextInput placeholder={'Album name'} />
      <Pressable style={albumStyles.addAlbumButton} onPress={submit}>
        <Text style={albumStyles.addAlbumButtonText}>Add album</Text>
      </Pressable>
    </View>
  )
}

export default AlbumForm
