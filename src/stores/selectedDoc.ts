import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DocObj } from '@/entities/DocObj'

export const useSelectedDocStore = defineStore('selectedDoc', () => {
  const selectedDoc = ref<DocObj | null>(null)

  const setSelectedDoc = (newDocs: DocObj): void => {
    selectedDoc.value = newDocs
  }
  const getSelectedDoc = (): DocObj | null => selectedDoc.value

  const deleteImage = (): void => {
    if (selectedDoc.value?.image) {
      delete selectedDoc.value.image
    }
  }

  return { selectedDoc, setSelectedDoc, getSelectedDoc, deleteImage }
})
