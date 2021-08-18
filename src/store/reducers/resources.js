import { db } from "../../firebase-config";

import { deleteDoc } from './docs'
import { deleteLink } from './links'

export const fetchResources = () => async (dispatch, getState) => {
  db.collection("docs").orderBy("updatedAt", "desc").onSnapshot((snapshot) => {
    dispatch({ type: "@docs/SET_DOCS", payload: snapshot.docs })
  });
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
  const types = {
    delete: deleteActions
  }
  return types[type][collection]
}