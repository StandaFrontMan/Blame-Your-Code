import { addPost, getPosts } from "./postsRepository";
import { BlameButtonProps } from "../infrastructure/BlameButtonProps";


export function submitPostFunc({ editorRef, selectedFileData, session, title, comments }: BlameButtonProps) {
    const editorValue = editorRef.current.getValue();
    const language = selectedFileData.language; 
    const newPost = {
        userId: 9, // Здесь должен быть пользователь
        language: language, // язык
        code: editorValue, // код, который писал пользователь
        title: title,   
        comment: comments,
    };

    addPost(newPost);

  }