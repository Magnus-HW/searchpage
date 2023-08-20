import type { DocAPI } from './types'

/*
  May be its overcode, and method txtFileSize could be implevented in TheItem.vue.
  But this approach is more OOP
*/
export class DocObj {
  id: number
  name: string
  description: string
  image?: string

  constructor(doc: DocAPI) {
    this.id = doc.id
    this.name = doc.name
    this.description = doc.description
    if (doc.image) {
      this.image = doc.image
    }
  }

  txtFileSize(): number {
    let docTxt: string = ''
    for (const item of Object.values(this)) {
      docTxt = docTxt + item + '\n'
    }
    return new Blob([docTxt]).size
  }
}
