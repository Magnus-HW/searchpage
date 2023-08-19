import type { DocAPI } from "./types"

export class DocObj {
  id: number
  name: string
  description: string
  image?: string
  docTxt: string

  constructor(doc: DocAPI) {
    this.id = doc.id
    this.name = doc.name
    this.description = doc.description
    if (doc.image) {
      this.image = doc.image
    }
    this.docTxt = this.toString()
  }

  toString(): string {
    let docTxt: string = ''
    for (const item of Object.values(this)) {
      docTxt = docTxt + item + '\n'
    }
    return docTxt
  }

  txtFileSize() : number {
    return new Blob([this.docTxt]).size
  }
}