import { db } from '../../firebase-config'

const initialState = [];

export default function state(state = initialState, action) {
  if (action.type === '@docs/GET_DOCS') {
    db.collection('docs').get().then(res => {
      res.forEach(doc => {
        state.push({
          id: doc.id,
          ...doc.data()
        })
      });
    })
  }
  if (action.type === '@docs/SAVE_CONTENT') {
    const { id, title, content } = action.payload;
    return state.map(doc => {
      if(doc.id === id) {
        return {
          ...doc,
          title: title ? title : doc.title,
          content: content ? content : doc.content,
        }
      }
      return doc
    })
  }
  return state;
}