import SelectedMenu from '@/app/components/Make an Blame/SelectedMenu'
import React from 'react'

interface SelectedMenuProps {
    selectedFile: string;
    setSelectedFile: (file: string) => void;
  }

const InfoField = ({ selectedFile, setSelectedFile }: SelectedMenuProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <SelectedMenu
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <div className='px-2 py-2 flex flex-col items-center justify-center'>
        <h3 className='text-xl px-2 py-2'>Name a title</h3>
        <textarea className='resize-none outline-none border rounded-md p-2 w-80 h-20 focus:ring focus:ring-blue-400 focus:border-blue-500'></textarea>
      </div>
      <div className='px-2 py-2 flex flex-col items-center justify-center'>
        <h3 className='text-xl px-2 py-2'>Some comments for your code</h3>
        <textarea className='resize-none outline-none border rounded-md p-2 w-80 h-32 focus:ring focus:ring-blue-400 focus:border-blue-500'></textarea>
      </div>
    </div>
  )
}

export default InfoField