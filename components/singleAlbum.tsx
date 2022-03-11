import React, { useEffect, useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import { albumStyles } from '../styles/albumStyles'
import { Entypo } from '@expo/vector-icons'
import { mainColor } from '../styles/common'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFav } from '../store/album/action'
import { Album, StoreState } from '../model/entities'

// @ts-ignore
const SingleAlbum = ({ album, navigation }) => {
  const favoriteAlbums = useSelector((state: StoreState) => {
    return state.album.albums
      .filter((album: Album) => album.favorite)
      .map((album: Album) => album.id)
  })
  const dispatch = useDispatch()
  const [albumEntity, setAlbumEntity]: [Album, any] = useState(new Album())
  const toggleFavorite = (albumId: string) => {
    if (favoriteAlbums.length === 5 && !(favoriteAlbums.includes(albumId))) {
      Alert.alert('Congratulations!', 'You\'ve added 5 favs today!', [
        {
          text: 'Close',
          style: 'destructive'
        }
      ])
      return
    }

    dispatch(toggleFav(albumId))
  }

  useEffect(() => {
    setAlbumEntity(album)
  }, [albumEntity, album])

  return (
    <View
      style={albumEntity.favorite ? albumStyles.favAlbum : albumStyles.album}
    >
      <View style={albumStyles.detailsContainer}>
        <View style={albumStyles.detailsBox}>
          <Text style={{ fontSize: 24, textAlign: 'center' }}>Album</Text>
          <Text style={albumStyles.albumTitle}>ID: {albumEntity.id} </Text>
          <Pressable
            onPress={() =>
              navigation.navigate('Albums details', { albumId: albumEntity.id })
            }
          >
            <Text style={albumStyles.albumTitle}>
              Title: {albumEntity.title}
            </Text>
          </Pressable>
        </View>
        <View style={albumStyles.buttonsBox}>
          <Pressable
            onPress={() =>
              navigation.navigate('Album form', { album: albumEntity })
            }
          >
            <Entypo
              name={'edit'}
              size={24}
              color={mainColor}
              style={{ textAlign: 'right' }}
            />
          </Pressable>
          <Pressable onPress={() => toggleFavorite(albumEntity.id)}>
            <Entypo
              name={albumEntity.favorite ? 'star' : 'star-outlined'}
              size={24}
              color={mainColor}
              style={{ textAlign: 'right' }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default SingleAlbum
