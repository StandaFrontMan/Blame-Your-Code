"use client";

import Editor from "@monaco-editor/react";
import React from "react";

export default function EditorTest() {
  const editorRef = React.useRef<null | any>(null);
  const [formData, setFormData] = React.useState({
    title: "",
    comment: "",
    language: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    console.log(editorRef.current.getValue());
    console.log(formData.title);
    console.log(formData.comment);
    console.log(formData.language);
  }

  return (
    <form onSubmit={showValue}>
      <button>Show value</button>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />

      <input
        type="text"
        onChange={handleChange}
        placeholder="title"
        name="title"
        value={formData.title}
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="comment"
        name="comment"
        value={formData.comment}
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="language"
        name="language"
        value={formData.language}
      />
    </form>
  );
}
