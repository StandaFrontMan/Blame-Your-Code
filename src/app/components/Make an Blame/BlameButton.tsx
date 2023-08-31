import { submitPostFunc } from '@/app/modules/Editor/domain/submitPostFunc';
import { BlameButtonProps } from '@/app/modules/Editor/infrastructure/BlameButtonProps';
import React from 'react'

export default function BlameButton({ editorRef, selectedFileData, session }: BlameButtonProps) {

  return (
    <button
        className='py-2 px-2 mx-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg duration-150'
        onClick={() => submitPostFunc({ editorRef, selectedFileData, session })}
    >
        Blame !
    </button>
  )
}

