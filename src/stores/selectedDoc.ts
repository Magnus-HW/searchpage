import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DocObj } from '@/entities/DocObj'

export const useSelectedDocStore = defineStore('selectedDoc', () => {
  const selectedDoc = ref<DocObj | null>(null)

  const setSelectedDoc = (newDocs: DocObj): void => {
    selectedDoc.value = newDocs
  }

  const deleteImage = (): void => {
    if (selectedDoc.value?.image) {
      delete selectedDoc.value.image
    }
  }
  const formDoxTxt = (): string => {
    let docTxt: string = ''
    if (selectedDoc.value) {
      for (const item of Object.values(selectedDoc.value)) {
        docTxt = docTxt + item + '\n'
      }
    }
    return docTxt
  }
  return { selectedDoc, setSelectedDoc, deleteImage, formDoxTxt }
})
