import React from 'react'
import MonacoEditorComponent from 'react-monaco-editor'

import '../monaco-imports'

const MONACO_DEFAULT_EDITOR = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly,
  cursorStyle: 'line',
  automaticLayout: true,
  fontLigatures: true,
  fontSize: 14
}

export default Editor = ({language, initialValue}) => {
   return (
    <MonacoEditorComponent
    defaultValue={initialValue}
    language={language}
    options={MONACO_DEFAULT_EDITOR}
    theme={'vs-dark'}
    width={width}
  />
   )
}