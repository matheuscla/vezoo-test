import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { useSelector, useDispatch } from 'react-redux';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-java';
import { deleteFile, saveFile } from '../../store/ducks/editor';

import Loading from '../Loading';

import { Header, Actions, Delete, Save, EmptyFile } from './styles';
import './syntax.css';

function CodeEditor() {
  const dispatch = useDispatch();
  const { selected_file, loading } = useSelector(state => state.editor);
  const [code, setCode] = useState(selected_file?.content);
  
  useEffect(() => {
    setCode(selected_file?.content)
  },[selected_file]);

  if (loading) {
    return <Loading />
  }

  return !loading && selected_file ? (
    <>
    <Header>
      <span>{selected_file.name}</span>

      <Actions>
        <Save onClick={() => dispatch(saveFile({ ...selected_file, content: code }))}>Save</Save>
        <Delete onClick={() => dispatch(deleteFile(selected_file.id))}>Delete</Delete>
      </Actions>
      </Header>
    <Editor
      value={code}
      onValueChange={value => setCode(value)}
      highlight={value => highlight(value, languages.java)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
      }}
    />
    </>
  ) : <EmptyFile>Select a file and start coding...</EmptyFile>
}

export default CodeEditor;