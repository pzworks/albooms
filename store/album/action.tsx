import {AlbumApi} from "../../api/album";

export const SET_ALBUMS = 'albums/set'

export const fetchAlbums = async (dispatch, getState) => {
  console.log('t')
  const albums = await AlbumApi.getAlbums().then(res => res.json())
  dispatch({type: SET_ALBUMS, payload: albums})
}
