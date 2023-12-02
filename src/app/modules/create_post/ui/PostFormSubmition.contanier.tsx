"use client";

import React from "react";
import PostFormSubmitionView from "./PostFormSubmition.view";
import { useInjection } from "@/app/core/hooks/UseInjection";
import { languagesArr } from "../data/LanguagesArray";
import { LanguagesArrayEntity } from "../data/LanguagesArrayEntity";
import { useRouter } from "next/navigation";

export default function PostFormSubmitionContanier() {
  const { createPostSubmitionRepository } = useInjection();
  const postRepository = createPostSubmitionRepository();

  const router = useRouter();

  const [formData, setFormData] = React.useState({
    postTitle: "",
    postComment: "",
    postLanguage: "script.js",
  });

  const editorRef = React.useRef<null | any>(null);
  const usedLanguage: LanguagesArrayEntity =
    languagesArr[formData.postLanguage];

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
      router.push("/pages/profilePage");
    } catch (error) {
      throw new Error("Something Wrong :-(");
    }
  };

  return (
    <PostFormSubmitionView
      formData={formData}
      setFormData={setFormData}
      usedLanguage={usedLanguage}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleEditorDidMount={handleEditorDidMount}
    />
  );
}
