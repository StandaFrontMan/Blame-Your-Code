'use client'

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { files } from "../../infrastructure/EditorLanguages";
import SelectedMenu from "@/app/components/Make an Blame/SelectedMenu";

const EditorField = () => {

  const [selectedFile, setSelectedFile] = useState('script.js');
  const selectedFileData = files[selectedFile];

  return (
    <>
      <SelectedMenu
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <Editor
        className='border rounded p-2 '
        theme="vs-dark"
        path={selectedFileData.name}
        defaultLanguage={selectedFileData.language}
        defaultValue={selectedFileData.value}
        width='50%'
        height='auto'
      />
    </>
  )
}


export default EditorField