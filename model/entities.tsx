export class Album {
  public id: string
  public title: string
  public favorite = false

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
  photos: Photo[]
}

export class Photo {
  public albumId: string
  public id: string
  public title: string
  public url: string
  public thumbnailUrl: string

  constructor(init: Partial<Photo> = {}) {
    Object.assign(this, init)
  }
}
