import React, {useEffect} from "react"
import {FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";
import {fetchAlbums} from "../store/album/action";
import SingleAlbum from "../components/singleAlbum";

const AlbumList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums)
  }, [dispatch])

  const albums: Album[] = useSelector((state: StoreState) => state.album.albums)

  return (
    <FlatList
      data={albums.slice(0, 10)}
      keyExtractor={(item) => item.id}
      renderItem={itemData => <SingleAlbum key={itemData.item.id} album={itemData.item} />}
    />
  )

}

export default AlbumList
