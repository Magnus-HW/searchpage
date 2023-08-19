import { docsService } from "./docsService";
import type { DocObj } from "@/entities/DocObj";

class ActionController {
  //search
  search(searchVal: string): void {
    docsService.searchDocs(searchVal)
  }
  //delete image
  deleteSelectedDocImg(): void {
    docsService.deleteSelectedDocImg()
  }
  //download
  downloadDocAsTxt(doc: DocObj): void {
    docsService.downloadDocAsTxt(doc)
  }
  //select doc
  selectDoc(doc: DocObj): void {
    docsService.selectDoc(doc)
  }
}

export const actionController = new ActionController();