export class Album {
  public id: string
  public name: string

  constructor(init: Partial<Album> = {}) {
    Object.assign(this, init)
  }
}
