export const getVaultState = (store) => store.vault;

export const getFiles = (store) =>
  getVaultState(store) ? getVaultState(store) : [];

export const getFile = (store, id) =>
  getVaultState(store)?.find(file => file.id === id)
