import { db } from "../../firebase-config";

import { setTasks, deleteTask, createTask } from './tasks'
import { setDocs, deleteDoc, createDoc } from './docs'
import { setLinks, deleteLink, createLink } from './links'

export const fetchResource = (collection) => async (dispatch, getState) => {
  const snapshot = await db.collection(collection).get();
  const action = getAction('set', collection)
  dispatch(action(snapshot.docs))
}

export const createResource = (collection, payload = null) => async (dispatch, getState) => {
  const action = getAction('save', collection)
  if(payload) { 
    const res = await db.collection(collection).add(payload)
    await db.collection(collection).doc(res.id).update({ id: res.id })
    dispatch (action({ id: res.id, ...payload }))
  }
  else { dispatch(action()) }
}

export const deleteResource = (collection, id) => async (dispatch, getState) => {
  db.collection(collection).doc(id).delete();
  const action = getAction('delete', collection)
  dispatch(action(id))
}

const getAction = (type, collection) => {
  const deleteActions = {
    'tasks': deleteTask,
    'docs':  deleteDoc,
    'links': deleteLink,
  }
  const createActions = { // should be create
    'tasks': createTask,
    'docs':  createDoc,
    'links': createLink,
  }
  const setActions = {
    'tasks': setTasks,
    'docs': setDocs,
    'links': setLinks,
  }
  const types = {
    set: setActions,
    delete: deleteActions,
    save: createActions, // should be create
  }
  return types[type][collection]
}
