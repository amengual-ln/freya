export const getBriefcasesState = (store) => store.briefcases;

export const getBriefcases = (store) =>
  getBriefcasesState(store) ? getBriefcasesState(store) : [];

export const getBriefcase = (store, id) =>
  getBriefcasesState(store)?.find(briefcase => briefcase.id === id)
