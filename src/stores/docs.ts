import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DocAPI } from '@/entities/types'
import { DocObj } from '@/entities/DocObj'

export const useDocsStore = defineStore('docs', () => {
  const docs = ref<DocObj[]>([])
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  const setDocs = (newDocs: DocAPI[]): void => {
    docs.value = newDocs.map(doc => new DocObj(doc))
  }
  const getDocs = (): DocObj[] => docs.value

  return { docs, setDocs, getDocs }
})

