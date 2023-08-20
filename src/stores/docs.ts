import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DocAPI } from '@/domains/docAPIService'
import { DocObj } from '@/entities/DocObj'

/*
  Store converts fetched docs to class objects DocObj.
  Here can be implemented other store management methods for example sorting.
*/

export const useDocsStore = defineStore('docs', () => {
  const docs = ref<DocObj[]>([])

  const setDocs = (newDocs: DocAPI[]): void => {
    docs.value = newDocs.map(doc => new DocObj(doc))
  }

  return { docs, setDocs }
})

