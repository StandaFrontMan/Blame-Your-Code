import React from 'react'

interface SelectedMenuProps {
    selectedFile: string;
    setSelectedFile: (file: string) => void;
  }

const SelectedMenu = ({ selectedFile, setSelectedFile }: SelectedMenuProps) => {
  return (
    <select
        className='w-24 h-10 px-2 py-2 mx-2 my-1 text-white bg-gray-800 hover:bg-gray-900 rounded-lg duration-150 outline-none'
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.value)}
    >
        <option value="script.js">JS</option>
        <option value="style.css">style.css</option>
        <option value="index.html">index.html</option>
  </select>
  )
}

export default SelectedMenu