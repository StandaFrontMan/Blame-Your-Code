"use client";

import React from "react";
import PostFormSubmitionView from "./PostFormSubmition.view";
import { useInjection } from "@/app/core/hooks/UseInjection";

export default function PostFormSubmitionContanier() {
  const { createPostSubmitionRepository } = useInjection();
  const postRepository = createPostSubmitionRepository();

  const [formData, setFormData] = React.useState({
    postTitle: "",
    postComment: "",
    postLanguage: "",
  });

  const editorRef = React.useRef<null | any>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const code = editorRef.current.getValue();

    try {
      await postRepository.submitPost(
        formData.postLanguage,
        code,
        formData.postTitle,
        formData.postComment
      );
    } catch (error) {
      throw new Error("Something Wrong :-(");
    }
  };

  return (
    <PostFormSubmitionView
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleEditorDidMount={handleEditorDidMount}
    />
  );
}
