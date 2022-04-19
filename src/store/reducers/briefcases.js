export default function state(state = [], action) {
	if (action.type === '@briefcases/SET_BRIEFCASES') {
		action.payload.forEach((briefcase) => {
			if (!state.find((previousBriefcase) => previousBriefcase.id === briefcase.id)) {
				state.push({
					id: briefcase.id,
					...briefcase.data(),
				})
			}
		})
	}
	if (action.type === '@briefcases/CREATE_BRIEFCASE') {
		state = state.concat(action.payload)
	}
	return state
}

export const createBriefcase = (briefcase) => async (dispatch, getState) => {
	dispatch({
		type: '@briefcases/CREATE_BRIEFCASE',
		payload: briefcase,
	})
}

export const setBriefcases = (briefcases) => async (dispatch, getState) => {
	dispatch({
		type: '@briefcases/SET_BRIEFCASES',
		payload: briefcases,
	})
}

export const modifyBriefcase = (briefcase) => async (dispatch, getState) => {}

export const deleteBriefcase = (id) => async (dispatch, getState) => {
	dispatch({
		type: '@briefcases/REMOVE_BRIEFCASE',
		payload: id,
	})
}
