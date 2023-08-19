import { useDocsStore } from '@/stores/docs'
import { docsAPiService } from './docAPIService'
import { useSelectedDocStore } from '@/stores/selectedDoc'
import type { DocObj } from '@/entities/DocObj'
import { NotifMsg, NotifType, useNotificationStore } from '@/stores/notifications'

class DocsService {

  /*
    Note: at new search selected doc can be reseted, but i decided to keep it
    until new doc selected
  */
  async searchDocs(docName: string): Promise<void> {
    useNotificationStore().setNotification({ type: NotifType.loading, msg: NotifMsg.loading })

    const docs = await docsAPiService.fetchSearchedDocs(docName)

    if (!(docs instanceof Error)) {
      useDocsStore().setDocs(docs)
      if (docs.length == 0) {
        console.log("empty");
        useNotificationStore().setNotification({ type: NotifType.warning, msg: NotifMsg.warning })
      } else {
        console.log("found");
        
        useNotificationStore().setNotification({ type: NotifType.ok, msg: NotifMsg.ok })
      }
    } else {
      useNotificationStore().setNotification({ type: NotifType.error, msg: NotifMsg.error })
    }
  }

  selectDoc(doc: DocObj): void {
    useSelectedDocStore().setSelectedDoc(doc)
  }
  
  deleteSelectedDocImg(): void {
    useSelectedDocStore().deleteImage()
  }

  downloadDocAsTxt(doc: DocObj): void {
    const data: string = doc.docTxt
    const blob = new Blob([data], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${doc.name}.txt`
    link.click()
    URL.revokeObjectURL(url)
  }
}

export const docsService = new DocsService()
