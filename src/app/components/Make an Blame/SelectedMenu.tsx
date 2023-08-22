import React from 'react'

interface SelectedMenuProps {
    selectedFile: string;
    setSelectedFile: (file: string) => void;
  }

const SelectedMenu = ({ selectedFile, setSelectedFile }: SelectedMenuProps) => {
  return (
    <select
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.value)}
    >
        <option value="script.js">script.js</option>
        <option value="style.css">style.css</option>
        <option value="index.html">index.html</option>
  </select>
  )
}

export default SelectedMenu