import { db } from "../../firebase-config";

let initialState = [];

export default function state(state = initialState, action) {
  if (action.type === "@resources/SET_RESOURCES") {
    action.payload.forEach((resource) => {
      if (!state.find((previousResource) => previousResource.id === resource.id)) {
        state.push({
          id: resource.id,
          ...resource.data(),
        });
      }
    });
  }
  if (action.type === "@resources/SAVE_CHANGES") {
    const now = new Date();
    const values = { ...action.payload, updatedAt: now };
    db.collection("resources").doc(values.id).update(values);
    state = state.map((resource) => {
      if (resource.id === values.id) {
        return {
          id: values.id ? values.id : resource.id,
          title: values.title ? values.title : resource.title,
          content: values.content ? values.content : resource.content,
          updatedAt: now,
        };
      }
      return resource;
    });
  }
  return state;
}

export const SaveNewResource = () => async (dispatch, getState) => {
  const now = new Date();
  const values = {
    title: "<h1>Nuevo documento</h1>",
    content: "<p>Contenido del documento...</p><br/><br/><br/>",
    createdAt: now,
    updatedAt: now,
  };
  const res = await db.collection("resources").add(values);
  db.collection("resources").doc(res.id).update({ id: res.id });
};

export const fetchResources = () => async (dispatch, getState) => {
  db.collection("resources").onSnapshot((snapshot) => {
    dispatch({ type: "@resources/SET_RESOURCES", payload: snapshot.docs })
  });
}