export interface FileData {
    name: string;
    language: string;
    value: string;
  }

export const files: Record<string, FileData> = {
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: '// You are coding in JavaScript',
    },
    'java.ja': {
      name: 'java.ja',
      language: 'java',
      value: '// You are coding in Java',
    },
    'python.py': {
      name: 'python.py',
      language: 'python',
      value: '# You are coding in Python',
    },
  };