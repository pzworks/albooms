export class AlbumApi {
  static getAlbums = () => {
    return fetch('https://jsonplaceholder.typicode.com/albums')
  }
}
