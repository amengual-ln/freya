export const getResourcesState = (store) => store.resources

export const getIsLoading = (store) =>
	getResourcesState(store).loading
