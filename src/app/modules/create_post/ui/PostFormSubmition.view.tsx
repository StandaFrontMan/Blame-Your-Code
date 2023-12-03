import { Editor } from "@monaco-editor/react";
import { LanguagesArrayEntity } from "../data/LanguagesArrayEntity";
import styles from "./PostFormSubmition.module.scss";
type Props = {
  formData: {
    postTitle: string;
    postComment: string;
    postLanguage: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      postTitle: string;
      postComment: string;
      postLanguage: string;
    }>
  >;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  handleEditorDidMount: (editor: any, monaco: any) => void;
  usedLanguage: LanguagesArrayEntity;
};

export default function PostFormSubmitionView({
  formData,
  setFormData,
  handleSubmit,
  handleChange,
  handleEditorDidMount,
  usedLanguage,
}: Props) {
  return (
    <div className={styles.contanier}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formContanier}>
          <Editor
            height="90vh"
            theme="vs-dark"
            defaultLanguage={usedLanguage.language}
            defaultValue={usedLanguage.value}
            path={usedLanguage.name}
            onMount={handleEditorDidMount}
          />
        </div>
        <div className={styles.inputsContanier}>
          <select
            // className="w-24 h-10 px-2 py-2 mx-2 my-1 text-white bg-gray-800 hover:bg-gray-900 rounded-lg duration-150 outline-none"
            className={styles.select}
            value={formData.postLanguage}
            onChange={(e) =>
              setFormData({ ...formData, postLanguage: e.target.value })
            }
          >
            <option value="script.js">JS</option>
            <option value="python.py">PY</option>
            <option value="java.ja">Java</option>
          </select>
          <input
            type="text"
            onChange={handleChange}
            placeholder="title"
            name="postTitle"
            value={formData.postTitle}
            className={styles.titleInput}
          />
          <textarea
            onChange={handleChange}
            placeholder="comment"
            name="postComment"
            value={formData.postComment}
            className={styles.textarea}
          />
          <div className={styles.buttonContanier}>
            <button className={styles.button}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
