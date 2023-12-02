import { Editor } from "@monaco-editor/react";

type Props = {
  formData: {
    postTitle: string;
    postComment: string;
    postLanguage: string;
  };
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  handleEditorDidMount: (editor: any, monaco: any) => void;
};

export default function PostFormSubmitionView({
  formData,
  handleSubmit,
  handleChange,
  handleEditorDidMount,
}: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="title"
          name="title"
          value={formData.postTitle}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="comment"
          name="comment"
          value={formData.postComment}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="language"
          name="language"
          value={formData.postLanguage}
        />
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
