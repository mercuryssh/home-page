export type Item = {
  name: string,
  url: URL
}


export class List {
  private static readonly storage = 'list';
  private static list: Array<Item>;

  private static saveList(): void {
    localStorage.setItem(this.storage, JSON.stringify(this.list))
  }

  static setList(newList: Array<Item>): void {
    localStorage.setItem(this.storage, JSON.stringify(newList))
  }

  static getList(): Array<Item> {
    return JSON.parse(localStorage.getItem(this.storage) || '')
  }

  static insertItem({ name, url }: Item): void {
    this.list.push({ name, url })
    this.saveList()
  }

}

