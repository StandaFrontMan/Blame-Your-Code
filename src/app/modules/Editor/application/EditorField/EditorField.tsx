'use client'

import { Editor, OnChange } from '@monaco-editor/react'
import React, { useState } from 'react'
import { handleEditorChange } from '../../domain/HandlerEditorChange';


const EditorField = () => {

    const [code, setCode] = useState<string>('');

  return (
    <Editor
        className='border rounded p-2 border-blue-500'
        defaultLanguage='javascript'
        defaultValue='// import { confidence } from @YourSelf'
        height='70vh'
        width='50%'
        theme='dark'
        value={code}
        onChange={(value) => handleEditorChange(value, setCode)}
    />
  )
}

export default EditorField