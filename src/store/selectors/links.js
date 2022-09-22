export const getLinksState = (store) => store.links;

export const getLinks = (store) =>
  getLinksState(store) ? getLinksState(store) : [];

export const getLink = (store, id) =>
  getLinksState(store)?.find(link => link.id === id)
