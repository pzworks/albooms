import {AlbumApi} from "../../api/album";
import {Album} from "../../model/entities";

export const SET_ALBUMS = 'albums/set'
export const EDIT_ALBUM = 'album/edit'
export const ADD_ALBUM = 'album/add'
export const TOGGLE_FAVORITE_ALBUM = 'album/toggle'
export const SET_PHOTOS = 'album/photos'

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

export const toggleFav = (albumId: string) => {
  return {type: TOGGLE_FAVORITE_ALBUM, payload: albumId}
}

export const fetchPhotos = (albumId: string) => {
  return async (dispatch) => {
    const photos = await AlbumApi.getPhotos(albumId).then(res => res.json())

    dispatch({type: SET_PHOTOS, payload: photos})
  }
}
