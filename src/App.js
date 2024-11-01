import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [dropzoneActive, setDropzoneActive] = useState(false)
  const [files, setFiles] = useState([])
  const [currentFileIndex, setCurrentFileIndex] = useState(null)
  const [lastUploadedFileIndex, setLastUploadedFileIndex] = useState(null)
  const [currentChunkIndex, setCurrentChunkIndex] = useState(null)

  function handleDrop (e) {
    e.preventDefault()
    setFiles([...files, ...e.dataTransfer.files])
  }

  function readAndUploadCurrentChunk () {}

  useEffect(() => {
    if (files.length > 0) {
      if (currentFileIndex === null) {
        setCurrentFileIndex(
          lastUploadedFileIndex === null ? 0 : lastUploadedFileIndex + 1
        )
      }
    }
  }, [files.length])

  useEffect(() => {
    if (currentFileIndex !== null) {
      setCurrentChunkIndex(0)
    }
  }, [currentFileIndex])

  useEffect(() => {
    if (currentChunkIndex !== null) {
      readAndUploadCurrentChunk()
    }
  }, [currentChunkIndex])

  return (
    <div>
      <div
        onDragOver={e => {
          setDropzoneActive(true)
          e.preventDefault()
        }}
        onDragLeave={e => {
          setDropzoneActive(false)
          e.preventDefault()
        }}
        onDrop={e => handleDrop(e)}
        className={'dropzone' + (dropzoneActive ? ' active' : '')}
      >
        Drop your files here
      </div>
    </div>
  )
}

export default App
