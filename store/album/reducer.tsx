import {Album} from "../../model/entities"

const INITIAL_STATE: {albums: Album[]} = {
  albums: []
}

const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default albumReducer
