import SingleAlbum from "./singleAlbum";
import {FlatList} from "react-native";
import React from "react";

const AlbumList = props => {
  const {albums} = props;

  return (
    <FlatList
      data={albums}
      keyExtractor={(item) => item.id}
      renderItem={itemData => <SingleAlbum key={itemData.item.id} album={itemData.item} navigation={props.navigation} />}
    />
  )
}

export default AlbumList
