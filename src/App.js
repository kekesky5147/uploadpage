import { useState } from 'react'
import './App.css'

function App () {
  const [dropzoneActive, setDropzoneActive] = useState(false)
  const [files, setFiles] = useState([])

  function handleDrop (e) {
    e.preventDefault()
    setFiles([...e.dataTransfer.files, ...files])
  }

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
