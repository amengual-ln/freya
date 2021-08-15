import { history } from "../../App.js";
import { db } from "../../firebase-config";

let initialState = [];

export default function state(state = initialState, action) {
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
  return state;
}

export const SaveNewDoc = () => async (dispatch, getState) => {
  const now = new Date();
  const values = {
    title: "<h1>Nuevo documento</h1>",
    content: "<p>Contenido del documento...</p>",
    createdAt: now,
    updatedAt: now,
  };
  const res = await db.collection("docs").add(values);
  db.collection("docs").doc(res.id).update({ id: res.id });
  history.push(`/doc/${res.id}`);
};

export const fetchDocs = () => async (dispatch, getState) => {
  db.collection("docs").orderBy("updatedAt", "desc").onSnapshot((snapshot) => {
    dispatch({ type: "@docs/SET_DOCS", payload: snapshot.docs })
  });
}

export const deleteDoc = (id) => async (dispatch, getState) => {
  db.collection("docs").doc(id).delete();
  const nextState = getState.map((doc) => doc.id !== id);
  dispatch({ type: "@docs/SET_DOCS", payload: nextState })
}