import { history } from "../../App.js";
import { db } from "../../firebase-config";

let initialState = [];

export default function state(state = initialState, action) {
  if (action.type === "@vault/SET_FILES") {
    action.payload.forEach((file) => {
      if (!state.find((previousFile) => previousFile.id === file.id)) {
        state.push({
          id: file.id,
          ...file.data(),
        });
      }
    });
  }
  if (action.type === "@vault/SAVE_CHANGES") {
    const now = new Date();
    const values = { ...action.payload, updatedAt: now };
    db.collection("vault").doc(values.id).update(values);
    state = state.map((file) => {
      if (file.id === values.id) {
        return {
          id: values.id ? values.id : file.id,
          title: values.title ? values.title : file.title,
          tags: values.tags ? values.tags : file.tags,
          updatedAt: now,
        };
      }
      return file;
    });
  }
  return state;
}

export const SaveNewFile = (payload) => async (dispatch, getState) => {
  const now = new Date();
  const tags = payload.tags?.split(", ");
  let values = { ...payload, updatedAt: now };
  values.tags = tags ? tags : [];
  const res = await db.collection("vault").add(values);
  db.collection("vault").doc(res.id).update({ id: res.id });
  history.push(`/vault/${res.id}`);
};

export const fetchFiles = () => async (dispatch, getState) => {
  db.collection("vault").onSnapshot((snapshot) => {
    dispatch({ type: "@vault/SET_FILES", payload: snapshot.docs })
  });
}