export const getResourcesState = (store) => store.resources;

export const getResources = (store) =>
  getResourcesState(store) ? getResourcesState(store) : [];

export const getResource = (store, id) =>
  getResourcesState(store)?.find(resource => resource.id === id)
