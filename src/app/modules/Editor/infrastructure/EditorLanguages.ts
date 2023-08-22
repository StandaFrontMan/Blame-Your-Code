export interface FileData {
    name: string;
    language: string;
    value: string;
  }

export const files: Record<string, FileData> = {
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: 'js',
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: 'css',
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: 'html',
    },
  };