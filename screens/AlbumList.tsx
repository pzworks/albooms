import React, {useEffect} from "react"
import {FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Album, StoreState} from "../model/entities";
import {fetchAlbums} from "../store/album/action";
import SingleAlbum from "../components/singleAlbum";

const AlbumList = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums)
  }, [dispatch])

  const albums: Album[] = useSelector((state: StoreState) => state.album.albums)

  return (
    <FlatList
      data={albums}
      keyExtractor={(item, index) => item.id}
      renderItem={itemData => <SingleAlbum key={itemData.item.id} album={itemData.item} />}
    />
  )

}

export default AlbumList
