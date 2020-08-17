import axios from 'axios';

const Types = {
  GET_TREE: 'GET_TREE'
}

export const getTree = () => async dispatch => {
  try {
    const { data } = await axios.get('https://my-json-server.typicode.com/open-veezoo/editor/filetree');
    
    return dispatch({ type: Types.GET_TREE, payload: data });
  } catch(e) {
    console.log(e);
    throw e;
  }
}

const INITIAL_STATE = {
  tree: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_TREE:
      return { ...state, tree: action.payload }
    default:
      return state;
  }
}