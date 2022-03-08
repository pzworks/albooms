export class AlbumApi {
  static getAlbums = () => {
    return fetch('https://jsonplaceholder.typicode.com/albums')
  }

  static getPhotos(albumId: string) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }
}
