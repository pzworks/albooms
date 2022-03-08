import { Album, AlbumStoreState } from '../../model/entities'
import {
  ADD_ALBUM,
  EDIT_ALBUM,
  SET_ALBUMS,
  SET_PHOTOS,
  TOGGLE_FAVORITE_ALBUM
} from './action'

const INITIAL_STATE: AlbumStoreState = {
  albums: [],
  photos: []
}

const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return { ...state, albums: action.payload }

    case ADD_ALBUM:
      let maxId: number = Math.max.apply(
        Math,
        state.albums.map(function (album) {
          return album.id
        })
      )
      maxId++
      const newAlbum = new Album({ ...action.payload, id: maxId })
      const albums = [newAlbum, ...state.albums]

      return { ...state, albums }

    case EDIT_ALBUM:
      const payload: Album = action.payload
      const updatedAlbums = state.albums.map(album =>
        album.id === payload.id ? payload : album
      )

      return { ...state, albums: updatedAlbums }

    case TOGGLE_FAVORITE_ALBUM:
      const currentAlbum: Album = state.albums.find(
        album => album.id === action.payload
      )
      const modifiedAlbum = {
        ...currentAlbum,
        favorite: !currentAlbum.favorite
      }
      const modifiedAlbums = state.albums.map(album =>
        album.id === action.payload ? modifiedAlbum : album
      )

      return { ...state, albums: modifiedAlbums }

    case SET_PHOTOS:
      const photos = action.payload

      return { ...state, photos }

    default:
      return state
  }
}

export default albumReducer
