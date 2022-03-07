export class Album {
  public id: string
  public title: string
  public favorite: string

  constructor(init: Partial<Album> = {}) {
    Object.assign(this, init)
  }
}

export class StoreState {
  public album: AlbumStoreState

  constructor(init: Partial<StoreState> = {}) {
    Object.assign(this, init)
  }
}

export interface AlbumStoreState {
  albums: Album[]
}
