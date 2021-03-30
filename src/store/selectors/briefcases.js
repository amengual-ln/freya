export const getBriefcasesState = (store) => store.briefcases;

export const getBriefcases = (store) =>
  getBriefcasesState(store) ? getBriefcasesState(store) : [];
