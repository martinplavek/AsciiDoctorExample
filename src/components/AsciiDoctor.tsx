import React, { useEffect, useRef } from 'react'
import { readAsciiDocFile, readAsciiDocFileNext } from '../utils/asciiDocFileReader'
export const AsciiDoctor = () => {
  const iFrameRef = useRef<HTMLIFrameElement>(null)

  function readFile(url: string) {
      return url === 'aDocNext' ? readAsciiDocFileNext() : readAsciiDocFile()
  }

  function clickHandler(e: MouseEvent) {
    e.preventDefault()
    const href = (e.target as HTMLAnchorElement).href.split('/').pop()
    console.log('target', e.target)
    console.log('href', href)
    readFile(href ?? 'aDoc')

    if (iFrameRef.current?.contentDocument) {
      const iFrameDocument = iFrameRef.current.contentDocument
      iFrameDocument.open()
      iFrameDocument.write(readFile(href ?? 'aDoc').toString())
      iFrameDocument.addEventListener('click', clickHandler)
      iFrameDocument.close()
    }
  }

  useEffect(() => {
    const iFrame = iFrameRef.current
    iFrame?.addEventListener('click', (e) => {
      e.preventDefault()
      window.postMessage('clicked')
      console.log('click event', e)
    })
    if (iFrame?.contentDocument) {
      const iFrameDocument = iFrame.contentDocument
      const content = readAsciiDocFile()
      console.log('content', content)
      iFrameDocument.open()
      iFrameDocument.write(readAsciiDocFile().toString())
      iFrameDocument.addEventListener('click', clickHandler)
      iFrameDocument.close()
    }
  }, [])

  return <iframe title="x" ref={iFrameRef} />
}
