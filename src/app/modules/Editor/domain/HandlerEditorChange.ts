import { OnChange } from "@monaco-editor/react";

export const handleEditorChange: OnChange = (value, setCode) => {
    setCode(value || ''); // Добавляем || '' для обработки undefined значения
}