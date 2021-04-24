import { history } from "../../App.js";
import { db } from "../../firebase-config";

let initialState = [];

export default function state(state = initialState, action) {
  if (action.type === "@docs/GET_DOCS") {
    db.collection("docs").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (!state.find((previousDoc) => previousDoc.id === doc.id)) {
          state.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      });
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
    content: "<p>Contenido del documento...</p><br/><br/><br/>",
    createdAt: now,
    updatedAt: now,
  };
  const res = await db.collection("docs").add(values);
  db.collection("docs").doc(res.id).update({ id: res.id });
  history.push(`/doc/${res.id}`);
};
