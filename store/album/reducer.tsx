import {Album, AlbumStoreState} from "../../model/entities"
import {SET_ALBUMS} from "./action";

const INITIAL_STATE: AlbumStoreState = {
  albums: [new Album({name: 'test'})]
}

const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      console.log('set_albums payload length', action.payload.length, new Date())

      return {...state, albums: action.payload}

    default:
      return state
  }
}

export default albumReducer
