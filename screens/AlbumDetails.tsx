import React from 'react'
import { SafeAreaView } from 'react-native'
import SingleAlbum from '../components/singleAlbum'
import { useSelector } from 'react-redux'
import { Album, StoreState } from '../model/entities'
import AlbumPhotos from '../components/AlbumPhotos'

const AlbumDetails = ({ route, navigation }) => {
  const { albumId } = route.params
  const album: Album = useSelector((state: StoreState) =>
    state.album.albums.find(album => album.id === albumId)
  )

  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <SingleAlbum album={album} navigation={navigation} />
      <AlbumPhotos albumId={albumId} />
    </SafeAreaView>
  )
}

export default AlbumDetails
