import { history } from "../../App";
import { db } from "../../firebase-config";

export default function state(state = [], action) {
  if (action.type === "@docs/SET_DOCS") {
    action.payload.forEach((doc) => {
      if (!state.find((previousDoc) => previousDoc.id === doc.id)) {
        state.push({
          id: doc.id,
          ...doc.data(),
        });
      }
    });
  }
  if (action.type === "@docs/CREATE_DOC") {
    state = state.concat(action.payload)
  }
  if (action.type === "@docs/SAVE_CHANGES") {
    const now = new Date();
    const values = { ...action.payload, updatedAt: now };
    db.collection("docs").doc(values.id).update(values);
    state = state.map((doc) => {
      if (doc.id === values.id) {
        return {
          id: values.id ? values.id : doc.id,
          title: values.title ? values.title : doc.title,
          content: values.content ? values.content : doc.content,
          updatedAt: now,
        };
      }
      return doc;
    });
  }
  if (action.type === '@docs/REMOVE_DOC') {
		state = state.filter((doc) => doc.id !== action.payload)
	}
  return state;
}

// // // // // // // // // // // // // // // // // // // // // //

export const setDocs = (docs) => async (dispatch, getState) => {
  dispatch({ type: "@docs/SET_DOCS", payload: docs })
}

export const createDoc = () => async (dispatch, getState) => {
  const now = new Date();
  const values = {
    title: "<h1>Nuevo documento</h1>",
    content: "<p>Contenido del documento...</p>",
    createdAt: now,
    updatedAt: now,
  };
  const res = await db.collection("docs").add(values);
  await db.collection("docs").doc(res.id).update({ id: res.id });
  dispatch({ type: "@docs/CREATE_DOC", payload: { id: res.id, ...values}})
  history.push(`/doc/${res.id}`);
};

export const fetchDocs = () => async (dispatch, getState) => {
  db.collection("docs").orderBy("updatedAt", "desc").onSnapshot((snapshot) => {
    dispatch({ type: "@docs/SET_DOCS", payload: snapshot.docs })
  });
}

export const modifyDoc = (doc) => async (dispatch, getState) => {}

export const deleteDoc = (id) => async (dispatch, getState) => {
  dispatch({
    type: '@docs/REMOVE_DOC',
    payload: id,
  })
}