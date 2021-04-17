import { db } from '../../firebase-config'

const initialState = [];

export default function state(state = initialState, action) {
  if (action.type === '@docs/GET_DOCS') {
    db.collection('docs').onSnapshot((docs) => {
      docs.forEach(doc => {
        state.push({
          id: doc.id,
          ...doc.data()
        })
      });
    })
  }
  if (action.type === '@docs/SAVE_CONTENT') {
    const values = action.payload;
    db.collection('docs').doc(values.id).update(values)
    state = state.map(doc => {
      if(doc.id === values.id) {
        return {
          id: values.id ? values.id : doc.id,
          title: values.title ? values.title : doc.title,
          content: values.content ? values.content : doc.content,
        }
      }
      return doc
    })
  }
  return state;
}