import { db } from "../../firebase-config";

import { deleteDoc, saveNewDoc } from './docs'
import { deleteLink } from './links'

export const fetchResources = () => async (dispatch, getState) => {
  db.collection("docs").orderBy("updatedAt", "desc").onSnapshot((snapshot) => {
    dispatch({ type: "@docs/SET_DOCS", payload: snapshot.docs })
  });
}

export const saveNewResource = (collection) => async (dispatch, getState) => {
  const action = getAction('save', collection)
  dispatch(action())
}

export const deleteResource = (collection, id) => async (dispatch, getState) => {
  db.collection(collection).doc(id).delete();
  const action = getAction('delete', collection)
  dispatch(action(id))
}

const getAction = (type, collection) => {
  const deleteActions = {
    'docs':  deleteDoc,
    'links': deleteLink,
  }
  const saveActions = {
    'docs':  saveNewDoc,
  }
  const types = {
    delete: deleteActions,
    save: saveActions,
  }
  return types[type][collection]
}