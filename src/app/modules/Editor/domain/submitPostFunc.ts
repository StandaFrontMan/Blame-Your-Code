import { addPost, getPosts } from "./postsRepository";
import { BlameButtonProps } from "../infrastructure/BlameButtonProps";


export function submitPostFunc({ editorRef, selectedFileData, session }: BlameButtonProps) {
    const editorValue = editorRef.current.getValue();
    const language = selectedFileData.language;
    const newPost = {
        user: session?.user?.name, // Здесь должен быть пользователь
        language: language, // язык
        code: editorValue, // код, который писал пользователь
    };

    addPost(newPost);

    console.log(getPosts());
  }