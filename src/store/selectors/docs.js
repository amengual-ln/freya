export const getDocsState = (store) => store.docs;

export const getDocs = (store) =>
  getDocsState(store) ? getDocsState(store) : [];

export const getDoc = (store, id) =>
  getDocsState(store)?.find(doc => doc.id === id)
