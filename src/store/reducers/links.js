import { db } from "../../firebase-config";

let initialState = [];

export default function state(state = initialState, action) {
  if (action.type === "@links/SET_LINKS") {
    action.payload.forEach((link) => {
      if (!state.find((previousLink) => previousLink.id === link.id)) {
        state.push({
          id: link.id,
          ...link.data(),
        });
      }
    });
  }
  if (action.type === "@links/SAVE_CHANGES") {
    const now = new Date();
    const values = { ...action.payload, updatedAt: now };
    db.collection("links").doc(values.id).update(values);
    state = state.map((link) => {
      if (link.id === values.id) {
        return {
          id: values.id ? values.id : link.id,
          title: values.title ? values.title : link.title,
          content: values.content ? values.content : link.content,
          updatedAt: now,
        };
      }
      return link;
    });
  }
  if (action.type === '@links/REMOVE_LINK') {
		state = state.filter((link) => link.id !== action.payload)
	}
  return state;
}

// // // // // // // // // // // // // // // // // //

export const SaveNewLink = () => async (dispatch, getState) => {
  const now = new Date();
  const values = {
    title: "<h1>Nuevo documento</h1>",
    content: "<p>Contenido del documento...</p><br/><br/><br/>",
    createdAt: now,
    updatedAt: now,
  };
  const res = await db.collection("links").add(values);
  db.collection("links").doc(res.id).update({ id: res.id });
};

export const fetchLinks = () => async (dispatch, getState) => {
  db.collection("links").onSnapshot((snapshot) => {
    dispatch({ type: "@links/SET_LINKS", payload: snapshot.docs })
  });
}

export const deleteLink = (id) => async (dispatch, getState) => {
  dispatch({
    type: '@links/REMOVE_LINK',
    payload: id,
  })
}