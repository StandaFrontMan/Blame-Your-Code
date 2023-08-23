'use client'

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { files } from "../../infrastructure/EditorLanguages";
import InfoField from "./InfoField";

const EditorField = () => {

  const [selectedFile, setSelectedFile] = useState('script.js');
  const selectedFileData = files[selectedFile];

  return (
    <div className="flex  w-full h-full">
      <div className="w-2/3 rounded-lg">
        <Editor
          className="px-2 py-2 rounded-lg"
          height='70vh'
          theme="vs-dark"
          path={selectedFileData.name}
          defaultLanguage={selectedFileData.language}
          defaultValue={selectedFileData.value}
        />
      </div>
      <div className="w-1/3 flex flex-col items-center py-2">
        <InfoField
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>
    </div>
  )
}


export default EditorField