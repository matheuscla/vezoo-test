import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import editorReducer, { getTree, getFile, deleteFile, Types } from '../editor';

const mockAxios = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Editor actions', () => {
  afterEach(() => {
    mockAxios.restore();
  });

  it('should create an action getTree', () => {
    mockAxios.onGet('https://my-json-server.typicode.com/open-veezoo/editor/filetree').reply(200, [
      {
        id: 3,
        name: 'Hello.java',
        isDirectory: false
      }
    ]);

    const expectedAction = {
      type: Types.GET_TREE,
      payload: [{
        id: 3,
        name: 'Hello.java',
        isDirectory: false
      }]
    };

    const store = mockStore({ tree: [] });

    store.dispatch(getTree()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('should create an action getFile', () => {
    mockAxios.onGet('https://my-json-server.typicode.com/open-veezoo/editor/files/1').reply(200, [
      {
        id: 3,
        name: 'Hello.java',
        content: "Hello world"
      }
    ]);

    const expectedAction = {
      type: Types.GET_FILE,
      payload: {
        id: 3,
        name: 'Hello.java',
        content: "Hello world"
      }
    };

    const store = mockStore({ selected_file: null });

    store.dispatch(getFile()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });

  it('should create an action deleteFile', () => {
    mockAxios.onDelete('https://my-json-server.typicode.com/open-veezoo/editor/files/1').reply(200, []);

    const expectedAction = {
      type: Types.DELETE_FILE,
      payload: 1
    };

    const store = mockStore({ selected_file: null });

    store.dispatch(deleteFile(1)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});

describe('Editor reducer', () => {
  it('should return the initial state', () => {
    expect(editorReducer(undefined, {})).toEqual({
      tree: [],
      selected_file: null,
      loading: false
    });
  });

  it('should handle Types.GET_TREE', () => {
    expect(editorReducer(undefined, { 
      type: Types.GET_TREE,
      payload: [{ id: 3, name: 'Hello.java', isDirectory: false }] 
    })).toEqual({
      loading: false,
      selected_file: null,
      tree: [{ id: 3, name: 'Hello.java', isDirectory: false }]
    });
  });

  it('should handle Types.GET_FILE', () => {
    expect(editorReducer(undefined, { 
      type: Types.GET_FILE,
      payload: { id: 3, name: 'Hello.java', content: "Hello world" }
    })).toEqual({
      loading: false,
      selected_file: { id: 3, name: 'Hello.java', content: "Hello world" },
      tree: []
    });
  });

  it('should handle Types.DELETE_FILE', () => {
    expect(editorReducer({
      selected_file: { id: 1, name: 'Hello.java', content: 'Hello Java' },
      loading: false,
      tree: [{ id: 1, name: 'Hello.java', content: 'Hello Java' }, { id: 2, name: 'Hello Javascript', content: 'Hello JS' }]},
    { 
      type: Types.DELETE_FILE,
      payload: 1
    })).toEqual({
      loading: false,
      selected_file: null,
      tree: [{ id: 2, name: 'Hello Javascript', content: 'Hello JS' }]
    });
  });

  it('should handle Types.SAVE_FILE', () => {
    expect(editorReducer({ 
      selected_file: { id: 1, name: 'Hello.java', content: 'Hello'}
    },
    { 
      type: Types.SAVE_FILE, payload: { id: 1, name: 'Hello.java', content: 'Hello java' }
    })).toEqual({
      selected_file: { id: 1, name: 'Hello.java', content: 'Hello java' }
    });
  })
});