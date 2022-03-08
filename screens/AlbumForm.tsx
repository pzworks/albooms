import React, { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { albumStyles } from '../styles/albumStyles'
import { Album } from '../model/entities'
import { useDispatch } from 'react-redux'
import { addAlbum, editAlbum } from '../store/album/action'

const AlbumForm = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const [album, setAlbum] = useState(new Album())
  const [isValid, setIsValid] = useState(true)
  const handleName = (title: string) => {
    const regex = new RegExp(/^[a-z ][^0-9]*$/gim)
    setAlbum({ ...album, title })
    setIsValid(regex.test(title))
  }
  const submit = () => {
    if (isValid) {
      if (album.id) {
        dispatch(editAlbum(album))
      } else {
        dispatch(addAlbum(album))
      }
    }

    navigation.navigate('Albums list')
  }

  useEffect(() => {
    if (route.params && 'album' in route.params) {
      setAlbum(route.params.album)
    } else {
      setAlbum(new Album())
    }
  }, [route.params])

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Album title:</Text>
      <TextInput
        multiline={true}
        style={isValid ? albumStyles.input : albumStyles.invalidInput}
        placeholder={'Album name'}
        value={album.title}
        onChangeText={handleName}
      />
      <Pressable
        disabled={!isValid}
        style={albumStyles.addAlbumButton}
        onPress={submit}
      >
        <Text style={albumStyles.addAlbumButtonText}>Save</Text>
      </Pressable>
    </View>
  )
}

export default AlbumForm
