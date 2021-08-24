import { db } from "../../firebase-config";

import { setTasks } from './tasks'
import { setDocs, deleteDoc, saveNewDoc } from './docs'
import { deleteLink } from './links'

export const fetchResource = (collection) => async (dispatch, getState) => {
  db.collection(collection).onSnapshot((snapshot) => {
    const action = getAction('set', collection)
    dispatch(action(snapshot.docs))
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
  const setActions = {
    'tasks': setTasks,
    'docs': setDocs,
  }
  const types = {
    set: setActions,
    delete: deleteActions,
    save: saveActions,
  }
  return types[type][collection]
}