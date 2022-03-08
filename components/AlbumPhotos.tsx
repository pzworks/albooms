import React, {useEffect} from "react";
import {FlatList, Image, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../model/entities";
import {fetchPhotos} from "../store/album/action";
import {albumStyles} from "../styles/albumStyles";
const AlbumPhotos = ({albumId}) => {
  const dispatch = useDispatch()
  const photos = useSelector((state: StoreState) => state.album.photos).slice(0, 10)
  console.log(photos)

  useEffect(() => {
    dispatch(fetchPhotos(albumId))
  }, [albumId])

  return (
    <FlatList
      horizontal={true}
      data={photos}
      renderItem={({item, index}) => { console.log(item); return (
        <View>
          <Image
            key={index}
            // source={{uri: item.thumbnailUrl, method: 'GET'}}
            source={{uri: `https://picsum.photos/200`, method: 'GET'}}
            style={albumStyles.image}
          />
        </View>)}}
    />
  )
}

export default AlbumPhotos
