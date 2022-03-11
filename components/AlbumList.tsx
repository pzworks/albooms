import React from 'react'
import SingleAlbum from './singleAlbum'
import { FlatList } from 'react-native'

// @ts-ignore
const AlbumList = ({ albums, navigation }) => {
  return (
    <FlatList
      data={albums}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <SingleAlbum
          key={item.id}
          album={item}
          navigation={navigation}
        />
      )}
    />
  )
}

export default AlbumList
