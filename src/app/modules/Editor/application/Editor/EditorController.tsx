import { Editor, Monaco } from '@monaco-editor/react';
import React, { useRef, useState } from 'react'
import { files } from '../../infrastructure/EditorLanguages';

const EditorController = () => {

  const [selectedFile, setSelectedFile] = useState('script.js');
  const selectedFileData = files[selectedFile];

  const editorRef = useRef<Monaco | null>(null);

  function handleEditorDidMount(editor: Monaco) {
    editorRef.current = editor;
  }

  return (
    <>
      <Editor
        className="px-2 py-2 rounded-lg"
        height='70vh'
        theme="vs-dark"
        path={selectedFileData.name}
        defaultLanguage={selectedFileData.language}
        defaultValue={selectedFileData.value}
        onMount={handleEditorDidMount}
      />
    </>
  )
}

export default EditorController