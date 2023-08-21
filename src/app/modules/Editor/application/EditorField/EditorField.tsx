'use client'

import { Editor, OnChange } from '@monaco-editor/react'
import React, { useState } from 'react'
import { handleEditorChange } from '../../domain/HandlerEditorChange';


const EditorField = () => {

  const [code, setCode] = useState<string>('');

  return (
    <Editor
        className='border rounded p-2 '
        defaultLanguage='typescript'
        defaultValue='// import { confidence } from @YourSelf'
        width='50%'
        height='auto'
        theme='vs-dark'
        value={code}
        onChange={(value) => handleEditorChange(value, setCode)}
    />
  )
}

export default EditorField