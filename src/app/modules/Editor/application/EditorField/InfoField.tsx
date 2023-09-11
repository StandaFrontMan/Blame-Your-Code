import BlameButton from '@/app/components/Make an Blame/BlameButton';
import SelectedMenu from '@/app/components/Make an Blame/SelectedMenu'
import { Session } from 'next-auth';
import React, { MutableRefObject, useState } from 'react'
import { FileData } from '../../infrastructure/EditorLanguages';

interface SelectedMenuProps {
    selectedFile: string;
    setSelectedFile: (file: string) => void;
    session: Session | null;
    editorRef: MutableRefObject<any>;
    selectedFileData: FileData;
  } 

const InfoField = ({ selectedFile, setSelectedFile, session, editorRef, selectedFileData }: SelectedMenuProps) => {
  
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <SelectedMenu
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <div className='px-2 py-2 flex flex-col items-center justify-center'>
        <h3 className='text-xl px-2 py-2'>Name a title</h3>
        <textarea
          className='resize-none outline-none border rounded-md p-2 w-80 h-20 focus:ring focus:ring-blue-400 focus:border-blue-500'
          value={title}
          onChange={handleTitleChange}
        ></textarea>
      </div>
      <div className='px-2 py-2 flex flex-col items-center justify-center'>
        <h3 className='text-xl px-2 py-2'>Some comments for your code</h3>
        <textarea
          className='resize-none outline-none border rounded-md p-2 w-80 h-32 focus:ring focus:ring-blue-400 focus:border-blue-500'
          value={comments}
          onChange={handleCommentsChange}
        ></textarea>
      </div>
      <div>
        <BlameButton
          session={session}
          editorRef={editorRef}
          selectedFileData={selectedFileData}
          title={title}
          comments={comments}
        />
      </div>
    </div>
  )
}

export default InfoField