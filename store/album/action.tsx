import {AlbumApi} from "../../api/album";
import {Album} from "../../model/entities";

export const SET_ALBUMS = 'albums/set'
export const EDIT_ALBUM = 'album/edit'
export const ADD_ALBUM = 'album/add'

export const fetchAlbums = async (dispatch) => {
  const albums = await AlbumApi.getAlbums()
    .then(res => res.json())
  dispatch({type: SET_ALBUMS, payload: albums})
}

export const editAlbum = (album: Album) => {
  return {type: EDIT_ALBUM, payload: album}
}

export const addAlbum = (album: Album) => {
  return {type: ADD_ALBUM, payload: album}
}
