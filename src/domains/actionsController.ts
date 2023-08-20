import { docsService } from "./docsService";
import type { DocObj } from "@/entities/DocObj";

/*
  Controller bounds user actions to call docsService methods
*/

class ActionController {
  search(searchVal: string): void {
    docsService.searchDocs(searchVal)
  }
  deleteSelectedDocImg(): void {
    docsService.deleteSelectedDocImg()
  }
  downloadDocAsTxt(doc: DocObj): void {
    docsService.downloadDocAsTxt(doc)
  }
  selectDoc(doc: DocObj): void {
    docsService.selectDoc(doc)
  }
}

export const actionController = new ActionController();