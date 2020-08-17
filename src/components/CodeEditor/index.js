import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { useSelector } from 'react-redux';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-java';

import Loading from '../Loading';

import './styles.css';

function CodeEditor() {
  const { selected_file, loading } = useSelector(state => state.editor);

  if (loading) {
    return <Loading />
  }

  return !loading && selected_file && (
    <Editor
      value={selected_file.content}
      // onValueChange={value => setCode(value)}
      highlight={value => highlight(value, languages.java)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  )
}

export default CodeEditor;