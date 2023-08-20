export const downloadTxt = (data: string, fileName: string): void => {
  const blob = new Blob([data], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${fileName}.txt`
  link.click()
  URL.revokeObjectURL(url)
}
