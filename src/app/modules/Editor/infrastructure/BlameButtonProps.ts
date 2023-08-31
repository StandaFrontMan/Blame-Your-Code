import { Monaco } from "@monaco-editor/react";
import { Session } from "next-auth";

export interface BlameButtonProps {
    session: Session | null;
    editorRef: React.RefObject<Monaco | null>;
    selectedFileData: {
      language: string;
    };
  }