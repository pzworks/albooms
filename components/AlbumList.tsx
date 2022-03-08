import SingleAlbum from './singleAlbum'
import { FlatList } from 'react-native'
import React from 'react'

const AlbumList = ({ albums, navigation }) => {
  return (
    <FlatList
      data={albums}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <SingleAlbum
          key={itemData.item.id}
          album={itemData.item}
          navigation={navigation}
        />
      )}
    />
  )
}

export default AlbumList
