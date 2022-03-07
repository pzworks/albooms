import {Album, AlbumStoreState} from "../../model/entities"
import {ADD_ALBUM, EDIT_ALBUM, SET_ALBUMS} from "./action";

const INITIAL_STATE: AlbumStoreState = {
  albums: []
}

const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return {...state, albums: action.payload}

    case ADD_ALBUM:
      const albums = [action.payload, ...state.albums]

      return {...state, albums}

    case EDIT_ALBUM:
      const payload: Album = action.payload
      const updatedAlbums = state.albums.map(album => album.id === payload.id ? payload : album)

      return {...state, albums: updatedAlbums}

    default:
      return state
  }
}

export default albumReducer
