'use client'

import { Editor, Monaco } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { files } from "../../infrastructure/EditorLanguages";
import InfoField from "./InfoField";
import BlameButton from "@/app/components/Make an Blame/BlameButton";
import { useSession } from "next-auth/react";

const EditorField = () => {

  const { data: session } = useSession()

  const [selectedFile, setSelectedFile] = useState('script.js');
  const selectedFileData = files[selectedFile];
  

  const editorRef = useRef<Monaco | null>(null);

  function handleEditorDidMount(editor: Monaco) {
    editorRef.current = editor;
  }

  return (
    <>
    <div className="flex  w-full h-full">
      <div className="w-2/3 rounded-lg">
        <Editor
          className="px-2 py-2 rounded-lg"
          height='70vh'
          theme="vs-dark"
          path={selectedFileData.name}
          defaultLanguage={selectedFileData.language}
          defaultValue={selectedFileData.value}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="w-1/3 flex flex-col items-center py-2">
        <InfoField
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>
    </div>
    <div className="flex items-center justify-center">
        <BlameButton
          session={session}
          editorRef={editorRef}
          selectedFileData={selectedFileData}
        />
    </div>
    </>
  )
}


export default EditorField