import axios from 'axios';
import { filterTree } from '../../utils';

const Types = {
  GET_TREE: 'GET_TREE',
  GET_FILE: 'GET_FILE',
  DELETE_FILE: 'DELETE_FILE',
  SAVE_FILE: 'SAVE_FILE',
  SET_LOADING: 'SET_LOADING',
}

export const getTree = () => async dispatch => {
  try {
    const { data } = await axios.get('https://my-json-server.typicode.com/open-veezoo/editor/filetree');
    
    return dispatch({ type: Types.GET_TREE, payload: data });
  } catch(e) {
    console.error(e);
    throw e;
  }
}

export const getFile = id => async dispatch => {
  try {
    dispatch({ type: Types.SET_LOADING, payload: true });

    const { data } = await axios.get(`https://my-json-server.typicode.com/open-veezoo/editor/files/${id}`);

    return dispatch({ type: Types.GET_FILE, payload: data });
  } catch(e) {
    console.error(e);
    throw e;
  } finally {
    dispatch({ type: Types.SET_LOADING, payload: false });
  }
}

export const deleteFile = id => async dispatch => {
  try {
    dispatch({ type: Types.SET_LOADING, payload: true });

    await axios.delete(`https://my-json-server.typicode.com/open-veezoo/editor/files/${id}`);

    return dispatch({ type: Types.DELETE_FILE, payload: id });
  } catch(e) {
    console.error(e);
    throw e;
  } finally {
    dispatch({ type: Types.SET_LOADING, payload: false });
  }
}

export const saveFile = file => async dispatch => {
  try {
    await axios.put(`https://my-json-server.typicode.com/open-veezoo/editor/files/${file.id}`, { ...file });

    return dispatch({ type: Types.SAVE_FILE, payload: file });
  } catch(e) {
    console.error(e);
    throw e;
  }
}

const INITIAL_STATE = {
  tree: [],
  selected_file: null,
  loading: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.SET_LOADING:
      return { ...state, loading: action.payload };
    case Types.GET_TREE:
      return { ...state, tree: action.payload };
    case Types.GET_FILE:
      return { ...state, selected_file: action.payload };
    case Types.DELETE_FILE:
      return {
        ...state,
        tree: filterTree(state.tree, ({ id }) => id !== action.payload),
        selected_file: null
      };
    case Types.SAVE_FILE:
      return {
        ...state,
        selected_file: action.payload,
      }  
    default:
      return state;
  }
}