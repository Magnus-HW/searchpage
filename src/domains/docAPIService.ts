/*
  docAPIService is responsible for fetching docs from API
*/
const DOCS_API = import.meta.env.VITE_DOCS_API

class docsAPI {
  docs_api: string
  constructor(DOCS_API: string) {
    this.docs_api = DOCS_API
  }

  async fetchSearchedDocs(searchStr: string): Promise<NonNullable<DocAPI[] | Error>> {
    try {
      const formatSearchStr = searchStr.replace(' ', '+')

      const response = await fetch(this.docs_api + `?search=${formatSearchStr}`)
    
      const docs = (await response.json()) as DocAPI[]
      return docs
    } catch (error) {
      if (error instanceof Error) {
        return error
      } else {
        return Error('Unknow error')
      }
    }
  }
}

export const docsAPiService = new docsAPI(DOCS_API)

export interface DocAPI {
  id: number
  name: string,
  description: string,
  image?: string
}